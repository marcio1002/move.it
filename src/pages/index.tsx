import Home from './Home/Home'
import { GetServerSideProps } from 'next'

import { ChallengesProviderProps } from 'App/contracts/Challenges'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

const Index = (props: ChallengesProviderProps) => <Home {...props}/>

export default Index