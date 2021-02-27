//componentes
import { ChallengesProvider } from 'App/context/ChallengesContext'

//css
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default App