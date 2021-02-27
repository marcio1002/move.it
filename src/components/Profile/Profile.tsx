//css
import { useContext } from 'react'
import { ChallengesContext } from 'App/context/ChallengesContext'
import styles from './Profile.module.css'

export const Profile = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/marcio1002.png"/>
      <div>
        <strong>Marcio Alemão</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}