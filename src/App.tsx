import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@pages/NotFoundPage'
import LoginPage from '@pages/Login'
import { LiveBettingPage } from '@pages/LiveBetting'
import { LiveSchedulePage } from './pages/LiveSchedule'
import { Layout } from '@components/layout'
import { SportPage } from './pages/SportPage'
import { LiveBettingDetailPage } from './pages/LiveBettingDetail'
import { MatchesPage } from './pages/MatchesPage'
import { SportsCompetition } from './pages/SportsCompetition'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/live-betting" element={<LiveBettingPage />} />
          <Route path="/live-schedule" element={<LiveSchedulePage />} />
          <Route path="/sports/matches" element={<MatchesPage />} />
          <Route path="/sports/competitions" element={<SportsCompetition />} />
          <Route path="/sports/:sport" element={<SportPage />} />
          <Route path="/live-betting/:id" element={<LiveBettingDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App