import { ReactNode } from 'react'


export interface ChallengesProviderProps {
  children:  ReactNode
}

export interface challenge {
  type: "body" | "eye"
  description: string;
  amount: number
}

export interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  challengeContent: challenge;
  experienceNextLevel: number,
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}