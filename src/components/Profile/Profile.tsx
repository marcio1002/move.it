//css
import styles from './Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/marcio1002.png"/>
      <div>
        <strong>Marcio Alemão</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 75
        </p>
      </div>
    </div>
  )
}