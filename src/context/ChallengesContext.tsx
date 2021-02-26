//componentes
import { createContext, useState } from 'react'
import { ChallengesProviderProps, ChallengesContextProps } from '../contracts/Challenges'

// api simulation
import challenges from '../../challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextProps)

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [challengeContent, setChallengeContent] = useState(null)

  const experienceNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const challenge = challenges[Math.floor( Math.random() * challenges.length)]
    console.dir(challenge)
    setChallengeContent(challenge)
  }

  const resetChallenge = () => setChallengeContent(null)

  const propsState: ChallengesContextProps = {
    level,
    currentExperience,
    challengesCompleted,
    experienceNextLevel,
    levelUp,
    startNewChallenge,
    challengeContent,
    resetChallenge
  }

  return (
    <ChallengesContext.Provider value={propsState} >
      { children}
    </ChallengesContext.Provider>
  )
}