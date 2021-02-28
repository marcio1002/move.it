import { createContext, useState, useEffect, useContext } from 'react'

import { CountDownContextProps, CountDownProviderProps  } from 'App/contracts/CountDown'
import { ChallengesContext } from 'App/context/ChallengesContext'


export const CountDownContext = createContext({} as CountDownContextProps)

let idTimeOut: NodeJS.Timeout
let timeStamp: number =  1 * 60

export const CountDownProvider = ({ children }: CountDownProviderProps) => {

  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(timeStamp)
  const [isActiveTime, setIsActiveTime] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  const startCountDown = () => {
    setIsActiveTime(true)
    setHasFinish(false)
  }

  const resetCountDown = () => {
    clearTimeout(idTimeOut)
    setIsActiveTime(false)
    setTime(timeStamp)
    setHasFinish(false)
  }

  useEffect(() => {
    if (isActiveTime && time > 0)
        idTimeOut = setTimeout(() => setTime(time - 1), 1000)

    if (time == 0) {
      setHasFinish(true)
      setIsActiveTime(false)
      setTime(minutes)
      startNewChallenge()
    }
  }, [isActiveTime, time])


  const contextProps: CountDownContextProps = {
    minutes,
    seconds,
    hasFinish,
    isActiveTime,
    resetCountDown,
    startCountDown,
  }

  return (
    <CountDownContext.Provider value={ contextProps }>
      {children}
    </CountDownContext.Provider>
  )
}