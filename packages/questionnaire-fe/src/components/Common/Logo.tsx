import React from 'react'
import { Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '@/router'

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <Space>
          <h1>
            <FormOutlined></FormOutlined>
          </h1>
          <h1>小木问卷</h1>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
