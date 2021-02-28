//componentes
import { useContext } from 'react'
import { CountDownContext } from 'App/context/CountDownContext'

//css
import styles from './Countdown.module.css'

export const CountDown = () => {

  const {
    hasFinish,
    minutes,
    isActiveTime,
    seconds,
    resetCountDown,
    startCountDown
  } = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
            className={styles.countDownButton}
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
                <img src="icons/close.svg"/>
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countDownButton}
                  onClick={startCountDown}
                >
                  Iniciar ciclo
                  <img className={styles.play} src="icons/play.svg"/>
                </button>
              )
            }
          </>
        )
      }
    </div>
  )
}