import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:data" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
