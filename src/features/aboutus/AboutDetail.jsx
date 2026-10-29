import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import Underline from '../../ui/UnderLine'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'
import { NavLink } from 'react-router-dom'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import Img from '../../ui/Img'

const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 3rem;

  @media ${devicesMax.md} {
    padding: 2rem;
  }
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`
const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 6rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const VideoContent = styled.div`
  width: 100%;

  padding: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
    gap: 20px;
  }
`
const Image = styled.div`
  flex-basis: 40%;
  border: 2px solid var(--color-primary-0);
  height: 25rem;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media ${devicesMax.md} {
    width: 90%;
    height: 50rem;
  }
`

const ContentDetail = styled.div`
  width: 65%;
  margin: 0 auto;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media ${devicesMax.lg} {
    width: 100%;
  }
`
const Detail = styled.div`
  border: 1px solid var(--color-grey-400);
  border-top: 5px solid var(--color-primary-0);
  width: 100%;
  background-color: var(--color-white-900);
  margin: 0 auto;
  padding: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devicesMax.md} {
    padding: 4rem;
  }
  @media ${devicesMax.sm} {
    padding: 2rem;
  }
`

const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
`
const StyledPer = styled.div`
  height: 20rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media ${devicesMax.sm} {
    height: 30rem;
    width: 90%;
  }
`
const CareerDetail = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem;
  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-black-900);
  color: var(--color-grey-700);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16),
    0px 3px 6px 0px rgba(0, 0, 0, 0.23);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    padding: 1rem;
    width: 90%;
  }
`
const StyledP = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
const CareerP = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledSpan = styled.span`
  text-transform: capitalize;
`
const TextBox = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Strong = styled.strong`
  color: var(--color-secoundary);
`
function AboutDetail() {
  return (
    <>
      <Section type="about">
        <Row>
          <Heading as="h1">About Us</Heading>
          <Underline />
        </Row>
        <AboutContent>
          <ImgBox>
            <Image>
              <Img src="/2.png" alt="pc8" />
            </Image>
            <Image>
              <Img src="/musah4.jpeg" loading="lazy" />
            </Image>
          </ImgBox>
          <ContentDetail>
            <Detail>
              <Heading as="h1">About Toloba Sports Consult</Heading>
              <StyledP>
                <Strong>Toloba Sports Consult: </Strong> is a beacon of
                opportunity for aspiring foo tball talents across the globe. Our
                unwavering commitment to nurturing the stars of tomorrow is
                matched only by our passion for the beautiful game.
              </StyledP>

              <StyledP>
                <Strong>Our Scouting Process: </Strong> At Toloba Sports
                Consult, we believe in a holistic approach to scouting and
                nurturing football talent. Our annual scouting process is
                executed by UEFA Certified coaches, ensuring that the selection
                of promising football talents is carried out with the highest
                standards of expertise.
              </StyledP>

              <StyledP>
                This year, we&apos;ve taken our scouting process to new heights
                by forming strategic partnerships with professional scouts
                hailing from Portugal, Spain, and Turkey. These scouts bring a
                wealth of experience and possess vital connections with top
                European clubs. Their expertise and networks are invaluable,
                significantly expanding the horizons for young talents who
                aspire to make a mark in the world of football.
              </StyledP>
              <StyledP>
                <Strong>Twice a Year Scouting: </Strong> We are proud to
                announce that these scouts from Portugal, Spain, and Turkey will
                visit twice a year. This means that aspiring football talents
                have not just one but two opportunities to showcase their skills
                and take a step closer to their dreams.
              </StyledP>
              <StyledP>
                <Strong>A World of Opportunity: </Strong> Toloba Sports
                Consult&apos;s global perspective ensures that talent knows no
                borders. With scouts from Portugal, Spain, and Turkey on board,
                we are committed to reaching talent across diverse geographies.
                Our mission is to unearth hidden gems worldwide, offering them
                the opportunity of a lifetime.
              </StyledP>
            </Detail>
          </ContentDetail>
        </AboutContent>
        <VideoContent>
          <Image>
            <YoutubeEmbed embedId="R4WnMNK6zQ0" />
          </Image>
          <Image>
            <YoutubeEmbed embedId="" />
          </Image>
        </VideoContent>
      </Section>
      <Section>
        <Row>
          <Heading as="h2">OUR TEAM</Heading>
          <Underline />
        </Row>
        <Team>
          <StyledBox>
            <StyledPer>
              <Img src="/staff9.jpeg" alt="pc21" />
            </StyledPer>
            <TextBox>
              <StyledSpan>Mr.Musah Toloba </StyledSpan>
              <StyledSpan>CEO</StyledSpan>
            </TextBox>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="/staff1.jpeg" alt="pc17" />
            </StyledPer>
            <TextBox>
              <StyledSpan>Mr. Mohamed Abib Tchabagna </StyledSpan>
              <StyledSpan>international scout</StyledSpan>
            </TextBox>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="/staff2.jpeg" alt="pc18" />
            </StyledPer>
            <TextBox>
              <StyledSpan>Mr Bismark Arjani</StyledSpan>
              <StyledSpan>Vice President</StyledSpan>
            </TextBox>
          </StyledBox>

          <StyledBox>
            <StyledPer>
              <Img src="/staff8.jpeg" alt="pc21" />
            </StyledPer>
            <TextBox>
              <StyledSpan>binti MD Deni/ismaliah </StyledSpan>
              <StyledSpan>International public relations</StyledSpan>
            </TextBox>
          </StyledBox>
        </Team>
      </Section>
      <Section>
        <Row>
          <Heading as="h2">CAREER</Heading>
          <Underline />
        </Row>
        <CareerDetail>
          <Row>
            <Heading as="h2"> Join Us in the Pursuit of Excellence</Heading>
          </Row>
          <CareerP>
            The measure of our success is reflected in the achievements of the
            players we have nurtured. These young talents, once hidden gems,
            have not only represented Ghana&apos;s junior national teams but
            have also achieved the extraordinary by securing coveted contracts
            with esteemed European clubs. Their journeys inspire us and stand as
            testaments to our commitment to nurturing the stars of tomorrow
          </CareerP>
          <CareerP>
            If you&apos;re passionate about football and aspire to be a part of
            the next generation of football stars, Toloba Sports Consult is your
            platform for growth and opportunity. Join us as we explore, train,
            and mentor the future football legends.
          </CareerP>
          <CareerP>Mtoloba@tolobasports.com</CareerP>
          <NavLink to="/contact">
            <Button>CONTACT US</Button>
          </NavLink>
        </CareerDetail>
      </Section>
    </>
  )
}

export default AboutDetail
