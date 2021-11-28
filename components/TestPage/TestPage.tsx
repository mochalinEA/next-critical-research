import {FC, useEffect, useState} from "react";
import styles from './styles.module.scss'

export const TestPage: FC = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
    }, 3000)
  }, [])

  return (
    <div>
      <button className={styles.button1}>Regular button</button>

      <button className={styles.button2}>Invisible button</button>

      {isButtonVisible && <button className={styles.button3}>Deferred button</button>}
    </div>
  )
}
