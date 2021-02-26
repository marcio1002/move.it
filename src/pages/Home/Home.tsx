import Head from 'next/head'

// components
import { ChallengeBox } from '../../components/ChallengeBox/ChallengeBox'
import { CompletedChallenges } from '../../components/CompletedChallenges/CompletedChallenges'
import { CountDown } from '../../components/Countdown/Countdown'
import { ExperienceBar } from '../../components/ExperienceBar/ExperienceBar'
import { Profile } from '../../components/Profile/Profile'

// Styles CSS
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Inicio | Move.it</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <ExperienceBar />
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
    </div>
  )
}

export default Home