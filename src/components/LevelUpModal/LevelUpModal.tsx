import { useContext } from "react"

import { ChallengesContext } from "App/context/ChallengesContext"

//css
import styles from "./LevelUpModal.module.css"

export const LevelUpModal = () => {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <div className={styles.overlay} >
      <div className={styles.levelUpModalContainer} >
        <header>{ level } </header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal} >
          <img src="/icons/close-dark.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}