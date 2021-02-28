import Head from 'next/head'

//providers
import { ChallengesProvider } from 'App/context/ChallengesContext'
import { CountDownProvider } from 'App/context/CountDownContext'

//typescript
import { ChallengesProviderProps } from 'App/contracts/Challenges'

// components
import { ChallengeBox } from 'App/components/ChallengeBox/ChallengeBox'
import { CompletedChallenges } from 'App/components/CompletedChallenges/CompletedChallenges'
import { CountDown } from 'App/components/Countdown/Countdown'
import { ExperienceBar } from 'App/components/ExperienceBar/ExperienceBar'
import { Profile } from 'App/components/Profile/Profile'

// Styles CSS
import styles from './Home.module.css'


const Home = (props: ChallengesProviderProps) => (
  <ChallengesProvider { ...props } >
    <div className={styles.container} >
      <Head>
        <title>Inicio | Move.it</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div className={styles.containerActionProfile} >
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div className={styles.containerChallenge}>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  </ChallengesProvider>
)

export default Home