import { ReactNode } from 'react'


export interface ChallengesProviderProps {
  children:  ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export interface challengeProps {
  type: "body" | "eye"
  description: string;
  amount: number
}

export interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceNextLevel: number,
  challengesContent: challengeProps;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void
}