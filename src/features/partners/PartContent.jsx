import Section from '../../ui/Section'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import UnderLine from '../../ui/UnderLine'
import Img from '../../ui/Img'
import styled, { css, keyframes } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledPart = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media ${devicesMax.lg} {
    flex-direction: column;
  }
  @media ${devicesMax.md} {
    padding: 2rem;
  }
`
const ContentBox = styled.div`
  flex-basis: 48%;
  ${(props) =>
    props.type === 'border' &&
    css`
      border: 1px solid var(--color-primary-0);
      border-top: 5px solid var(--color-black-900);
      padding: 1rem;
    `}
`
const TextBox = styled.div`
  background-color: transparent;
  width: 70%;
  margin: 0 auto;

  @media ${devicesMax.md} {
    width: 100%;
  }
`

const StyledList = styled.ul``
const StyledItem = styled.li`
  color: var(--color-white);
  padding: 6rem;

  border: 1px solid var(--color-grey-300);
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const PartnerTran = keyframes`
0%{
transform: translateX(0);
}
100%{
  transform: translateX(calc(-350px * 4));
}
`

const StyledTran = styled.div`
  width: 200%;
  height: 25rem;
  margin: 0 auto;
  display: flex;

  animation: ${PartnerTran} 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`
const ImgList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ImgItem = styled.li`
  height: 15rem;
  width: 350px;
`
const ImgScroll = styled(LazyLoadImage)`
  width: 200px;
  height: 15rem;
`
const P = styled.p``
const Strong = styled.strong`
  color: var(--color-secoundary);
`

function PartContent() {
  return (
    <>
      <Section>
        <Row>
          <Heading as="h2">Partner with us</Heading>
          <UnderLine />
        </Row>
        <StyledPart>
          <ContentBox>
            <Img src="/pc31.jpg" alt="pc31" loading="lazy" />
          </ContentBox>
          <ContentBox type="border">
            <P>
              <Strong>Toloba Sports Consult:</Strong>
              We are on a mission to transform the landscape of football through
              our multifaceted approach that encompasses Consulting, Scouting,
              and Mentoring. Our vision is to create a new generation of
              educated and skilled footballers while nurturing careers around
              the sport.
            </P>
          </ContentBox>
        </StyledPart>
      </Section>
      <Section type="part">
        <Row>
          <Heading as="h2">WHY PARTNER WITH US</Heading>
          <UnderLine cols="col" />
        </Row>
        <TextBox>
          <StyledList>
            <StyledItem>
              <Strong>Unlocking Opportunities Through Consulting:</Strong> Our
              consulting services are designed to guide and empower individuals,
              schools, universities, football associations, and football clubs
              to achieve their football-related goals. With a wealth of
              experience and expertise, we provide tailored solutions to address
              your unique aspirations in the world of football.
            </StyledItem>
            <StyledItem>
              <Strong>Scouting for Talent Across Continents: </Strong> Toloba
              Sports Consult is not bound by borders; our scouting network spans
              across continents, seeking out promising football talent. Our
              dedicated scouts and experts tirelessly identify potential
              football stars and offer them the opportunity of a lifetime to
              showcase their skills and embark on a journey towards excellence.
            </StyledItem>
            <StyledItem>
              <Strong>Mentoring for Holistic Growth:</Strong> Mentorship is at
              the core of what we do. We believe that true success in football
              is not just about physical prowess but also about mental and
              emotional maturity. Our mentors guide student-athletes towards
              growth at both mental and physical levels, ensuring they approach
              their work, attitude, and life with excellence.
            </StyledItem>
            <StyledItem>
              <Strong>Building the Biggest Football: </Strong> Academy Partner
              Network As we envision the future of football, we are constructing
              the largest football academy Partner Network. We welcome
              individuals, proprietors, and organizations who share our passion
              for sports and bring prior experience in the corporate
              environment. Join us in this journey to transform the football
              landscape and create opportunities for aspiring talents.
            </StyledItem>
            <StyledItem>
              <Strong>Join Us in Shaping Football&apos;s Future: </Strong>
              Toloba Sports Consult is your partner in shaping the future of
              football. Whether you are a passionate individual, a proprietor,
              or an organization, together we can build a brighter future for
              football and empower the next generation of footballers and
              careers around the sport.
            </StyledItem>
          </StyledList>
        </TextBox>
      </Section>
      <Section type="parts">
        <StyledTran>
          <ImgList>
            <ImgItem>
              <ImgScroll src="/com1.png" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com2.jpeg" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com3.jpeg" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com4.png" alt="com1" loading="lazy" />
            </ImgItem>
          </ImgList>
          <ImgList>
            <ImgItem>
              <ImgScroll src="/com1.png" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com2.jpeg" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com3.jpeg" alt="com1" loading="lazy" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="/com4.png" alt="com1" loading="lazy" />
            </ImgItem>
          </ImgList>
        </StyledTran>
      </Section>
    </>
  )
}

export default PartContent
