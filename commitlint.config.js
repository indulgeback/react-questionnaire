module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 只检查提交信息的第一行是否包含有效的提交类型
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test'
    ]],
    // 允许任何其他格式的提交信息
    'subject-case': [0], // 关闭 subject-case 检查
    'header-max-length': [0, 'always', 72], // 关闭 header-max-length 检查
    'body-leading-blank': [0, 'always'], // 关闭 body-leading-blank 检查
    'footer-leading-blank': [0, 'always'], // 关闭 footer-leading-blank 检查
    'body-empty': [0, 'never'], // 关闭 body-empty 检查
    'footer-empty': [0, 'never'], // 关闭 footer-empty 检查
    'signed-off-by': [0, 'never'], // 关闭 signed-off-by 检查
    'scope-enum': [0, 'always', []], // 关闭 scope-enum 检查
    'subject-empty': [0, 'never'], // 关闭 subject-empty 检查
    'subject-full-stop': [0, 'never', '.'], // 关闭 subject-full-stop 检查
    'header-case': [0, 'always', 'lower-case'], // 关闭 header-case 检查
    'references-empty': [0, 'never'], // 关闭 references-empty 检查
  },
};