import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TodayPage } from './pages/TodayPage'
import { CardsPage } from './pages/CardsPage'
import { ErrorsPage } from './pages/ErrorsPage'
import { MasteryPage } from './pages/MasteryPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/hoje" replace />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/cartoes" element={<CardsPage />} />
          <Route path="/erros" element={<ErrorsPage />} />
          <Route path="/dominio" element={<MasteryPage />} />
          <Route path="*" element={<Navigate to="/hoje" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
