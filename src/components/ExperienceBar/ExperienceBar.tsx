//componentes
import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'

//css
import styles from './ExperienceBar.module.css'

export const ExperienceBar = () => {
  const { currentExperience, experienceNextLevel } = useContext(ChallengesContext)

  const percentNextLevel = Math.round(currentExperience * 100) / experienceNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentNextLevel}%` }}></div>
        <span className={styles.currentExperience} style={{ left: '50%' }} > 
          { currentExperience } xp 
        </span>
      </div>
      <span>{ experienceNextLevel } xp</span>
    </header>
  )
}