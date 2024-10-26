import React from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '@/router'
import whiteLogo from '@/assets/img/white-logo.png'

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <img src={whiteLogo} />
      </Link>
    </div>
  )
}

export default Logo
