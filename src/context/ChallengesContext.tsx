//componentes
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { ChallengesContextProps, ChallengesProviderProps,  challengeProps } from 'App/contracts/Challenges'
import { LevelUpModal } from 'App/components/LevelUpModal/LevelUpModal'

// api simulation
import challenges from '../../challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextProps)

export const ChallengesProvider = ({ children, ...props }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(props.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(props.challengesCompleted ?? 0)
  const [challengesContent, setChallengesContent] = useState(null)
  const [isLevelUpModal, setIsLevelUpModal] = useState(false)


  useEffect(() => {
    setChallengesContent(null)

    if('Notification' in window && 
        Notification.permission == "default"
      ) 
        Notification.requestPermission()
  },[])

  useEffect(() => {
    Cookies.set("level", String(level))
    Cookies.set("currentExperience", String(currentExperience))
    Cookies.set("challengesCompleted", String(challengesCompleted))

  }, [level, currentExperience, challengesCompleted])

  const experienceNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModal(true)
  }

  const closeLevelUpModal = () => setIsLevelUpModal(false)

  const startNewChallenge = () => {
    const challenge = challenges[Math.floor( Math.random() * challenges.length)]
    
    if(!document.hasFocus() && Notification?.permission == "granted") {

      if('Audio' in window) new Audio('/notification.mp3').play();

      (new Notification("🎁 Novo desafio 🎉", {
        body: `Valendo ${challenge.amount}xp `,
        icon: 'favicon.png',
        requireInteraction: true,
        vibrate: [200,200,200]
      })) .onclick = () => focus()
    }
    setChallengesContent(challenge)
  }

  const resetChallenge = () => setChallengesContent(null)

  const completeChallenge = () => {
    if(!challengesContent) return

    const { amount }: challengeProps = challengesContent

    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceNextLevel) {
      finalExperience -= experienceNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setChallengesContent(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  const contextProps: ChallengesContextProps = {
    level,
    currentExperience,
    challengesCompleted,
    experienceNextLevel,
    levelUp,
    startNewChallenge,
    challengesContent,
    resetChallenge,
    completeChallenge,
    closeLevelUpModal
  }

  return (
    <ChallengesContext.Provider value={contextProps} >
      { children }
      { isLevelUpModal &&  <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}