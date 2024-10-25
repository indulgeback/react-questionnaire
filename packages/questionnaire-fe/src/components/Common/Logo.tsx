import React from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '@/router'

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <img src="/white-logo.png" />
      </Link>
    </div>
  )
}

export default Logo
