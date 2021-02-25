import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

export function CountDown() {

  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active && time > 0)
      setTimeout(() => setTime(time - 1), 1000)
    else
      setActive(false)

    if(time == 0)
      setTime(25 * 60)

  }, [active, time])

  const [minuteLeft, minuteRight] = String(Math.floor(time / 60)).padStart(2, '0').split('')

  const [secondLeft, secondRight] = String(time % 60).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countDownContainer} >
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.countDownButton}
        onClick={() => setActive(!active)}
      >
        Iniciar ciclo
      </button>
    </div>
  )
}