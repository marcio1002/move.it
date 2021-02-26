import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext';
import styles from './Countdown.module.css'

export const CountDown = () => {

  const { startNewChallenge } = useContext(ChallengesContext)

  let idTimeOut, minutes = 2 /* 25 * 60 */

  const [time, setTime] = useState(minutes)
  const [isActiveTime, setIsActiveTime] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)

  const startCountDown = () => {
    setIsActiveTime(true)
    setHasFinish(false)
  }

  const resetCountDown = () => {
    clearTimeout(idTimeOut)
    setIsActiveTime(false)
    setTime(minutes)
  }

  useEffect(() => {
    if (isActiveTime && time > 0)
      idTimeOut = setTimeout(() => setTime(time - 1), 1000)

    if (time == 0) {
      setHasFinish(true)
      setIsActiveTime(false)
      setTime(minutes)
      startNewChallenge()
    }
  }, [isActiveTime, time])

  const [minuteLeft, minuteRight] = String(Math.floor(time / 60)).padStart(2, '0').split('')

  const [secondLeft, secondRight] = String(time % 60).padStart(2, '0').split('')

  return (
    <div className={styles.boxCountDown} >
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
      {
        hasFinish ? (
          <button
            disabled
            className={`${styles.countDownButton}`}
          >
            Ciclo encerrado
          </button>
        ) : (
            <>
              {isActiveTime ? (
                  <button
                    type="button"
                    className={`${styles.countDownButton} ${styles.countDownButtonAbandon}`}
                    onClick={resetCountDown}
                  >
                    Abandonar ciclo
                  </button>
              ) : (
                  <button
                    type="button"
                    className={styles.countDownButton}
                    onClick={startCountDown}
                  >
                    Iniciar ciclo
                  </button>
              )
              }
            </>
          )
      }
    </div>
  )
}