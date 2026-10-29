import styled, { css } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { NavLink } from 'react-router-dom'
import Button from '../../ui/Button'
import Underline from '../../ui/UnderLine'
import Heading from '../../ui/Heading'

const Container = styled.div`
  padding: 4rem;

  @media ${devicesMax.md} {
    padding: 3rem;
  }
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`

const StyledHeader = styled.div`
  padding-bottom: 4rem;
  text-align: center;
`

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

const StyledCard = styled.figure`
  height: 25rem;


  background-position: center;
  background-repeat: no-repeat;
  background-size: 110%;
  overflow: hidden;
  transition: all 1s;

  &:hover {
    background-size: 110%;
    backdrop-filter: 100%;
    border: 2px solid var(--color-ink-700);
    filter: 100%;
  }
  &:hover H2 {
    bottom: 50px;
  }
  &:hover Button {
    bottom: 10px;
  }
  @media ${devicesMax.sm} {
    background-size: 100% 100%;
  }
  ${(props) =>
    props.pics === 'aboutus' &&
    css`
      background-image: url('/musah.jpeg');
      /* @media ${devicesMax.md} {
        background-image: url('/musah-small.jpg');
      } */
    `}
  ${(props) =>
    props.pics === 'residential' &&
    css`
      background-image: url('/musah2.jpeg');
      /* @media ${devicesMax.md} {
        background-image: url('/musah2-small.jpg');
      } */
    `}
  ${(props) =>
    props.pics === 'euro' &&
    css`
      background-image: url('/images/pc20.jpeg');
    `}
  ${(props) =>
    props.pics === 'coach' &&
    css`
      background-image: url('/musah3.jpeg');
    `}

`

const StyledBox = styled.div`
  width: 50%;
  height: 100%;

  position: relative;
  @media ${devicesMax.md} {
    width: 90%;
  }
`

const H2 = styled.h2`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-signal);
  position: absolute;
  bottom: 1px;
  left: 5px;
  transition: all 0.3s;
  @media ${devicesMax.md} {
  }
`

function Interest() {
  return (
    <Container>
      <StyledHeader>
        <Heading as="h1">CHOOSE YOUR INTEREST</Heading>
        <Underline />
      </StyledHeader>
      <StyledBody>
        <StyledCard pics="aboutus">
          <StyledBox>
            <H2>About MTLO</H2>
            <Button pros="interest">
              <NavLink to="/aboutus">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="residential">
          <StyledBox>
            <H2>RESIDENTIAL FOOTBALL SCHOOL</H2>
            <Button pros="interest">
              <NavLink to="/consult">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="euro">
          <StyledBox>
            <H2>EUROPEAN PROGRAMMES</H2>
            <Button pros="interest">
              <NavLink to="/programmes">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="coach">
          <StyledBox>
            <H2>COACH EDUCATION</H2>
            <Button pros="interest">
              <NavLink to="/trainer">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
      </StyledBody>
    </Container>
  )
}

export default Interest
