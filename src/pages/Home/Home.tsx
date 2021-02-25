// components
import Head from 'next/head'
import { CompletedChallenges } from '../../components/CompletedChallenges/CompletedChallenges'
import { CountDown } from '../../components/Countdown/Countdown'
import { ExperienceBar } from '../../components/ExperienceBar/ExperienceBar'
import { Profile } from '../../components/Profile/Profile'

// Styles CSS
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}