//componentes
import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'

//css
import styles from './ChallengeBox.module.css'

export const ChallengeBox = () => {
  const { challengeContent, resetChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.challengeBoxContainer} >
      {
        challengeContent ? (
          <div className={styles.challengeBoxActive} >
            <header>Ganhe {challengeContent.amount} xp</header>

            <main>
              <img src={`icons/${challengeContent.type}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{challengeContent.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton} 
                onClick={resetChallenge}      
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceedButton}
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