import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { QRCode, Button, message, Tooltip } from 'antd'
import { CopyOutlined, QrcodeOutlined } from '@ant-design/icons'

const Qrcode = () => {
  const { id } = useParams()
  const url = `${window.location.origin}/client?id=${id}`
  const qrRef = useRef<HTMLDivElement>(null)

  // 复制链接到剪贴板
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      message.success('链接已复制到剪贴板')
    } catch (e) {
      message.error('复制失败，请手动复制')
    }
  }

  // 复制二维码图片到剪贴板
  const handleCopyQrcode = async () => {
    try {
      // 获取canvas元素
      const canvas = qrRef.current?.querySelector('canvas') as HTMLCanvasElement
      if (!canvas) throw new Error('未找到二维码')
      // 转为blob
      canvas.toBlob(async blob => {
        if (!blob) throw new Error('二维码转图片失败')
        try {
          // 复制到剪贴板
          await navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })])
          message.success('二维码图片已复制到剪贴板')
        } catch (err) {
          message.error('复制失败，建议使用最新版Chrome/Edge浏览器')
        }
      }, 'image/png')
    } catch (e) {
      message.error('复制失败，建议使用最新版Chrome/Edge浏览器')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-custom-primary-300 via-custom-bg-200 to-custom-bg-100 rounded-2xl shadow-2xl p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-extrabold text-custom-primary-100 tracking-wider drop-shadow-lg">
          扫码答题
        </h2>
        <div ref={qrRef}>
          <QRCode
            value={url}
            size={220}
            className="my-4 border-4 border-custom-primary-100 rounded-lg shadow-md"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Tooltip title="复制二维码图片">
            <Button icon={<QrcodeOutlined />} onClick={handleCopyQrcode} type="primary" ghost>
              复制二维码
            </Button>
          </Tooltip>
          <Tooltip title="复制答题链接">
            <Button icon={<CopyOutlined />} onClick={handleCopyLink} type="primary">
              复制链接
            </Button>
          </Tooltip>
        </div>
        <div className="mt-4 text-base text-custom-text-200 break-all text-center select-all">
          <span className="font-semibold text-custom-primary-200">答题链接：</span>
          <span>{url}</span>
        </div>
      </div>
      <div className="mt-8 text-sm text-custom-text-200 opacity-70 text-center">
        请用微信或浏览器扫码，或复制链接到新窗口打开
      </div>
    </div>
  )
}

export default Qrcode
