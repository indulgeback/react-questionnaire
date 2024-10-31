import React from 'react'
import styles from './CustomSpin.module.scss'
const CustomSpin: React.FC = () => {
  return (
    <>
      <div className={styles.loading}>
        {Array.from({ length: 36 }, (_, index) => (
          <div key={index} className={styles.dot} />
        ))}
      </div>
    </>
  )
}

export default CustomSpin
