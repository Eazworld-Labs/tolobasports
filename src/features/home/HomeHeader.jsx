import styled from 'styled-components'
import NavBar from '../../ui/Navbar'
import Logo from '../../ui/Logo'
import SocialIcon from '../../ui/SocialIcon'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 5000;
`

function Header() {
  return (
    <StyledHeader>
      <Logo img="/mloogo.png" type="big" position="header" />
      <SocialIcon />
      <NavBar />
    </StyledHeader>
  )
}

export default Header
