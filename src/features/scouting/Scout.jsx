import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import UnderLine from '../../ui/UnderLine'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ScoutContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 0 8rem;
  margin-bottom: 4rem;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 0 2rem;
  }
`
const ScoutDetail = styled.div`
  flex: 1;
  height: 100%;
`
const ScoutText = styled.div`
  flex: 1;
  border: 1px solid var(--color-ink-700);
  border-top: 5px solid var(--color-signal);
  padding: 4rem;
  color: var(--color-grey-500);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    padding: 1.5rem;
  }
`
const Img = styled(LazyLoadImage)`
  width: 100%;
  /* height: 310px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const StyledP = styled.p`
  width: 100%;
  font-size: 2rem;
  text-align: justify;
`

const StyledCheck = styled.div`
  padding: 4rem;
  background-image: url('/pc37.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${devicesMax.md} {
    margin-bottom: 4rem;
    padding: 2rem;
  }
`
const H4 = styled.h4`
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--color-white);
  font-size: 2rem;
`
const VideoContent = styled.div`
  padding: 4rem;
  height: 40rem;

  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 2rem;
  }
`
const Strong = styled.strong`
  color: var(--color-signal);
`
function Scout() {
  return (
    <>
      <Section>
        <Row>
          <Heading as="h1">Scouting</Heading>
          <UnderLine />
        </Row>
        <ScoutContent>
          <ScoutDetail>
            <Img src="/pc30.jpg" alt="pc30" loading="lazy" />
          </ScoutDetail>
          <ScoutText>
            <StyledP>
              <Strong>Our Scouting Process: </Strong>
              At Toloba Sports Consult, we believe in a holistic approach to
              scouting and nurturing football talent. Our annual scouting
              process is executed by UEFA Certified coaches, ensuring that the
              selection of promising football talents is carried out with the
              highest standards of expertise. This year, we&apos;ve taken our
              scouting process to new heights by forming strategic partnerships
              with professional scouts hailing from Portugal, Spain, and Turkey.
              These scouts bring a wealth of experience and possess vital
              connections with top European clubs. Their expertise and networks
              are invaluable, significantly expanding the horizons for young
              talents who aspire to make a mark in the world of football.
            </StyledP>
          </ScoutText>
        </ScoutContent>
        <ScoutContent>
          <ScoutText>
            <StyledP>
              <Strong>Twice a Year Scouting: </Strong>
              We are proud to announce that these scouts from Portugal, Spain,
              and Turkey will visit twice a year. This means that aspiring
              football talents have not just one but two opportunities to
              showcase their skills and take a step closer to their dreams.
            </StyledP>
          </ScoutText>
          <ScoutDetail>
            <Img src="/pc30.jpg" alt="pc30" loading="lazy" />
          </ScoutDetail>
        </ScoutContent>
        <ScoutContent>
          <ScoutDetail>
            <Img src="/pc30.jpg" alt="pc30" loading="lazy" />
          </ScoutDetail>
          <ScoutText>
            <StyledP>
              <Strong>A World of Opportunity: </Strong>
              Toloba Sports Consult&apos;s global perspective ensures that
              talent knows no borders. With scouts from Portugal, Spain, and
              Turkey on board, we are committed to reaching talent across
              diverse geographies. Our mission is to unearth hidden gems
              worldwide, offering them the opportunity of a lifetime.
            </StyledP>
          </ScoutText>
        </ScoutContent>
        <ScoutContent>
          <ScoutText>
            <StyledP>
              <Strong> Join Us in the Pursuit of Excellence: </Strong>
              If you&apos;re passionate about football and aspire to be a part
              of the next generation of football stars, Toloba Sports Consult is
              your platform for growth and opportunity. Join us as we explore,
              train, and mentor the future football legends.
            </StyledP>
          </ScoutText>
          <ScoutDetail>
            <Img src="/pc30.jpg" alt="pc30" loading="lazy" />
          </ScoutDetail>
        </ScoutContent>
      </Section>
      <StyledCheck>
        <H4>CHECK SCOUTING SCHEDULE AND OTHER IMPORTANT ANNOUNCEMENTS</H4>
        <Button>CLICK HERE</Button>
      </StyledCheck>
      <Section>
        <Row>
          <Heading as="h2">THE RISING STARS</Heading>
          <UnderLine />
        </Row>
        <VideoContent>
          <YoutubeEmbed embedId="" />
          <YoutubeEmbed embedId="" />
        </VideoContent>
      </Section>
    </>
  )
}

export default Scout
