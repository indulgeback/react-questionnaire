import React from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '../router'

const { Title } = Typography

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <Space>
          <Title>
            <FormOutlined></FormOutlined>
          </Title>
          <Title>小木问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
