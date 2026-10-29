import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledSocial = styled.div`
  padding-right: 10rem;
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledLink = styled(NavLink)`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  z-index: 10000;
`
function SocialIcon() {
  return (
    <StyledSocial>
      <StyledLink to="https://www.facebook.com/profile.php?id=61552980643002&mibextid=gjUFcU">
        <Img src="/facebook.png" />
      </StyledLink>
      <StyledLink to="https://instagram.com/toloba_sports?igshid=MXd0NGphOHNib2ZqYw==">
        <Img src="/instagram.png" />
      </StyledLink>
      <StyledLink>
        <Img src="/youtube.png" />
      </StyledLink>
    </StyledSocial>
  )
}

export default SocialIcon
