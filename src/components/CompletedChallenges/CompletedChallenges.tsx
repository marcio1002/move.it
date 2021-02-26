//componentes
import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'

//css
import styles from './CompletedChallenges.module.css'

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallenges} >
      <span>Desafios completados</span>
      <span>{ challengesCompleted }</span>
    </div>
  )
}