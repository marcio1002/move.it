//componentes
import { useContext } from 'react'
import { ChallengesContext } from 'App/context/ChallengesContext'
import { CountDownContext } from 'App/context/CountDownContext'

//css
import styles from './ChallengeBox.module.css'

export const ChallengeBox = () => {

  const { challengeContent, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountDown } = useContext(CountDownContext)



  const handleChallengeSucceeded = () => {
    resetCountDown()
    completeChallenge()
  }

  const handleChallengeFailed = () => {
    resetCountDown()
    resetChallenge()
  }

  return (
    <div className={styles.challengeBoxContainer} >
      {
        challengeContent ? (
          <div className={styles.challengeBoxActive} >
            <header>Ganhe {challengeContent.amount ?? "sdfds"} xp</header>

            <main>
              <img src={`icons/${challengeContent.type ?? "eye"}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{challengeContent.description ?? "sddsfd"}</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton} 
                onClick={handleChallengeFailed}      
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceedButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
            
          </div>
        ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios
            </p>
          </div>
        )
      }
    </div>
  )
}