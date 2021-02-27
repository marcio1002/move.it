import { ReactNode } from 'react'

export interface CountDownProviderProps {
  children: ReactNode
}

export interface CountDownContextProps {
    minutes: number;
    seconds: number;
    hasFinish: boolean;
    isActiveTime: boolean;
    resetCountDown: () => void;
    startCountDown: () => void;
}
