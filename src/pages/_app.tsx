import '../styles/global.css'

import { ChallengesProvider } from '../context/ChallengesContext'

export default function App({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}


