const { exec } = require('child_process');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

// 初始化Ora加载器
const spinner = ora({
  text: '正在处理...',
  color: 'yellow'
});

// 使用chalk定义颜色函数
const logInfo = (...args) => console.log(chalk.blueBright(...args));
const logSuccess = (...args) => console.log(chalk.greenBright(...args));
const logError = (...args) => console.error(chalk.redBright(...args));
const logWarning = (...args) => console.warn(chalk.yellowBright(...args));

// 确保所有环境变量都已设置
const ENV_VARS = {
  ALIYUN_USERNAME: 'ALIYUN_USERNAME',
  ALIYUN_PASSWORD: 'ALIYUN_PASSWORD',
  ALIYUN_REGISTRY_URL: 'ALIYUN_REGISTRY_URL',
  FRONTEND_IMAGE_NAME: 'FRONTEND_IMAGE_NAME',
  BACKEND_IMAGE_NAME: 'BACKEND_IMAGE_NAME',
  FRONTEND_DOCKERFILE_PATH: 'FRONTEND_DOCKERFILE_PATH',
  BACKEND_DOCKERFILE_PATH: 'BACKEND_DOCKERFILE_PATH'
};

const requiredEnvVars = Object.values(ENV_VARS);

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  logError(`以下环境变量未设置: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

logInfo(' -------------------- 环境变量加载完毕 -------------------- ');
logInfo('Aliyun Registry URL:', process.env.ALIYUN_REGISTRY_URL);
logInfo('Aliyun Username:', process.env.ALIYUN_USERNAME);
logInfo('Aliyun Password:', process.env.ALIYUN_PASSWORD);
logInfo('Frontend Image Name:', process.env.FRONTEND_IMAGE_NAME);
logInfo('Backend Image Name:', process.env.BACKEND_IMAGE_NAME);
logInfo('Frontend Dockerfile Path:', process.env.FRONTEND_DOCKERFILE_PATH);
logInfo('Backend Dockerfile Path:', process.env.BACKEND_DOCKERFILE_PATH);
logInfo(' --------------------------------------------------------- ');

// 从lerna.json读取版本号
function getVersionFromLerna() {
  try {
    const lernaJsonPath = path.resolve(__dirname, '../lerna.json');
    const lernaJsonContent = fs.readFileSync(lernaJsonPath, 'utf8');
    const lernaJson = JSON.parse(lernaJsonContent);
    return lernaJson.version;
  } catch (err) {
    logError('无法读取或解析lerna.json:', err.message);
    process.exit(1);
  }
}

// 执行命令并返回结果
async function executeCommand(command) {
  return new Promise((resolve, reject) =>
    exec(command, (err, stdout, stderr) => {
      if (err) {
        return reject({ error: err, stderr });
      }
      resolve(stdout);
    })
  );
}

// 构建单个镜像
async function buildImage(imageName, tag, platforms, dockerfilePath) {
  const imageNameWithTag = `${process.env.ALIYUN_REGISTRY_URL}/${imageName}:${tag}`;
  const fullDockerfilePath = dockerfilePath ? `-f ${dockerfilePath}` : '';

  // 启动加载动画
  spinner.start(`开始构建镜像: ${imageNameWithTag} for platforms: ${platforms.join(',')}`);

  const startTime = process.hrtime.bigint();
  try {
    // 使用 buildx 进行多平台构建，并启用进度显示
    await executeCommand(`docker buildx build --progress=plain --platform=${platforms.join(',')} ${fullDockerfilePath} -t ${imageNameWithTag} .`);

    // 构建成功后停止加载动画，并显示成功消息
    spinner.succeed(`镜像构建成功: ${chalk.greenBright(imageNameWithTag)}`);
    const endTime = process.hrtime.bigint();
    const timeDiff = (endTime - startTime) / 1000n / 1000n; // Convert to milliseconds
    logInfo(`构建用时: ${timeDiff} ms`);
  } catch (err) {
    // 如果发生错误，停止加载动画，并显示错误消息
    spinner.fail(`镜像构建失败: ${chalk.redBright(imageNameWithTag)}`, err.stderr);
    throw err;
  }
}

// 推送单个镜像
async function pushImage(imageName, tag) {
  const imageNameWithTag = `${process.env.ALIYUN_REGISTRY_URL}/${imageName}:${tag}`;

  // 启动加载动画
  spinner.start(`开始推送镜像: ${imageNameWithTag}`);

  const startTime = process.hrtime.bigint();
  try {
    // 推送镜像到仓库
    await executeCommand(`docker push ${imageNameWithTag}`);

    // 推送成功后停止加载动画，并显示成功消息
    spinner.succeed(`镜像推送成功: ${chalk.greenBright(imageNameWithTag)}`);
    const endTime = process.hrtime.bigint();
    const timeDiff = (endTime - startTime) / 1000n / 1000n; // Convert to milliseconds
    logInfo(`推送用时: ${timeDiff} ms`);
  } catch (err) {
    // 如果发生错误，停止加载动画，并显示错误消息
    spinner.fail(`镜像推送失败: ${chalk.redBright(imageNameWithTag)}`, err.stderr);
    throw err;
  }
}

// 登录到阿里云镜像仓库
async function loginToRegistry() {
  return executeCommand(`echo ${process.env.ALIYUN_PASSWORD} | docker login --username=${process.env.ALIYUN_USERNAME} --password-stdin ${process.env.ALIYUN_REGISTRY_URL}`);
}

// 主流程控制
async function main() {
  try {
    // 获取lerna.json中的版本号
    const version = getVersionFromLerna();
    logInfo('从 lerna.json 中读取到的版本号:', chalk.cyan(version));

    // 定义前端和后端的镜像名称、标签以及Dockerfile路径
    const images = [
      { name: process.env.FRONTEND_IMAGE_NAME, dockerfilePath: process.env.FRONTEND_DOCKERFILE_PATH },
      { name: process.env.BACKEND_IMAGE_NAME, dockerfilePath: process.env.BACKEND_DOCKERFILE_PATH }
    ];

    // 定义需要构建的目标平台
    const platforms = ['linux/amd64', 'linux/arm64'];

    // 登录到阿里云镜像仓库
    spinner.start('尝试登录到阿里云镜像仓库...');
    await loginToRegistry();
    spinner.succeed('登录到阿里云镜像仓库成功');

    // 遍历并构建、推送每个镜像，分别为 arm 和 x86 版本
    for (const image of images) {
      logInfo(`\n开始处理镜像: ${image.name}`);
      // 对于每个镜像，构建两个版本：arm 和 x86
      for (const platform of platforms) {
        const arch = platform.split('/')[1];
        const tag = `${version}-${arch}`;
        
        await buildImage(image.name, tag, [platform], image.dockerfilePath);
        await pushImage(image.name, tag);
      }
    }

    spinner.succeed('所有步骤完成！');
  } catch (error) {
    spinner.fail('发生错误:', error.message);
  }
}

main();