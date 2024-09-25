import React from 'react'
import styles from './Face.module.scss'
import useRollEyeBall from '@/hooks/useRollEyeBalls'

const Face: React.FC = () => {
  const { leftEyeBallRef, rightEyeBallRef } = useRollEyeBall()
  return (
    <div className={styles.face}>
      <div className={styles.eye}>
        <div ref={leftEyeBallRef} className={styles.ball}></div>
      </div>
      <div className={styles.eye}>
        <div ref={rightEyeBallRef} className={styles.ball}></div>
      </div>
    </div>
  )
}

export default Face
