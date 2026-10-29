import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../ui/Footer'

import Header from './SiteHeader'

const StyledAppLayout = styled.div``

const Main = styled.main`
  width: 100%;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main id="main" tabIndex={-1}>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  )
}

export default AppLayout
