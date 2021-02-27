//componentes
import { createContext, useEffect, useState } from 'react'
import { ChallengesContextProps, ChallengesProviderProps,  challenge } from 'App/contracts/Challenges'

// api simulation
import challenges from '../../challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextProps)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [challengeContent, setChallengeContent] = useState(null)


  useEffect(() => {
    setChallengeContent(null)

    if('Notification' in window) Notification.requestPermission()
  },[])

  const experienceNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const challenge = challenges[Math.floor( Math.random() * challenges.length)]
    
    
    if(Notification.permission == "granted") {
      if('Audio' in window)
        new Audio('/notification.mp3').play()

      let notification = new Notification("🎁 Novo desafio 🎉", {
        body: `Valendo ${challenge.amount}xp `,
        icon: 'icons/strategy.svg',
        requireInteraction: true,
        vibrate: [200,200,200]
      })

      notification.onclick = () => focus()
    }
    setChallengeContent(challenge)
  }

  const resetChallenge = () => setChallengeContent(null)

  const completeChallenge = () => {
    if(!challengeContent) return

    const { amount }: challenge = challengeContent

    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceNextLevel) {
      finalExperience -= experienceNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setChallengeContent(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  const contextProps: ChallengesContextProps = {
    level,
    currentExperience,
    challengesCompleted,
    experienceNextLevel,
    levelUp,
    startNewChallenge,
    challengeContent,
    resetChallenge,
    completeChallenge
  }

  return (
    <ChallengesContext.Provider value={contextProps} >
      { children}
    </ChallengesContext.Provider>
  )
}