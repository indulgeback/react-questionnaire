export default (verificationCode, expirationTime) => {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN,en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>验证码邮件</title>
        <style>
            body {
                font-family: 'Times New Roman', serif;
                background-image: url('https://img.51miz.com/Element/00/81/65/92/f019a9da_E816592_d84ba320.png'); /* 替换为你的在线背景图片URL */
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                color: #333;
            }
            .letter-container {
                max-width: 600px;
                margin: auto;
                padding: 40px;
                background-color: rgba(255, 255, 255, 0.9);
                border: 2px solid #eaeaea;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .letter-header {
                text-align: center;
                margin-bottom: 20px;
            }
            .letter-content {
                line-height: 1.6;
                text-align: justify;
            }
            .letter-footer {
                text-align: center;
                margin-top: 20px;
            }
            .verification-code {
                font-size: 2em;
                color: #007BFF;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="letter-container">
            <div class="letter-header">
                <h1>尊敬的用户 / Dear User,</h1>
            </div>
            <div class="letter-content">
                <p>您好！感谢您使用我们的服务！为了验证您的身份，请使用以下验证码：</p>
                <p>Hello! Thank you for using our service! To verify your identity, please use the following verification code:</p>
                <p class="verification-code">${verificationCode}</p>
                <p>请注意，此验证码将在 ${expirationTime / 60} 分钟后过期。</p>
                <p>Please note that this verification code will expire in ${expirationTime / 60} minutes.</p>
                <p>如果您有任何疑问或需要帮助，请随时联系我们。</p>
                <p>If you have any questions or need help, feel free to contact us.</p>
            </div>
            <div class="letter-footer">
                <p>感谢您的支持！<br>Best regards,</p>
                <p>小木问卷<br>XM questionnaire</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
