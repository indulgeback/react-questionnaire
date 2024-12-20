#!/usr/bin/env node
const { execSync } = require('child_process');
const packageJson = require('../lerna.json');

// 获取版本号
const version = packageJson.version;

// 添加所有更改到暂存区
execSync('git add .', { stdio: 'inherit' });

// 提交更改
execSync(`git commit -m "chore: bump versions"`, { stdio: 'inherit' });

// 创建标签
execSync(`git tag -a v${version} -m "Version ${version}"`, { stdio: 'inherit' });

// 推送代码和标签
execSync('git push && git push origin --tags', { stdio: 'inherit' });

console.log(`Version ${version} has been tagged and pushed.`);