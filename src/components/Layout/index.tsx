import { Outlet } from 'react-router-dom'
import { Container } from './styles'

import Header from '../Header'
import Sidebar from '../Sidebar'

export default function Layout() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Outlet />
    </Container>
  )
}
