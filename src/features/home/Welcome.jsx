import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledWel = styled.div`
  color: var(--color-white);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.7)),
    url('/pc10.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;

  @media ${devicesMax.lg} {
    flex-direction: column;
  }
`
const StyledBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`
const StyledP = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;
  padding: 2rem;
  color: var(--color-white);
  @media ${devicesMax.lg} {
    font-size: 2.5rem;
    text-align: center;
  }
  @media ${devicesMax.md} {
    font-size: 1.8rem;
  }
`
const ImgBox = styled.div`
  background-color: transparent;
`
const Img = styled(LazyLoadImage)`
  height: 40rem;
  width: 65rem;
`
function Welcome() {
  return (
    <StyledWel>
      <StyledBox>
        <Heading as="h1">Toloba Sports consult</Heading>
        <StyledP>
          We prioritize Fostering talent, enhancing skills, and nurturing
          athletes to reach their full potential in the world of sports
        </StyledP>
      </StyledBox>
      <ImgBox>
        <Img src="/1 NEW.png" alt="tolo" loading="lazy" />
      </ImgBox>
    </StyledWel>
  )
}

export default Welcome
