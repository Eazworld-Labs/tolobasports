import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import Row from '../../ui/Row'
import Underline from '../../ui/UnderLine'
import styled from 'styled-components'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { devicesMax } from '../../styles/BreakPoint'

const ContentDetail = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const TextDetail = styled.div`
  border: 1px solid var(--color-ink-700);
  border-top: 5px solid var(--color-ink-900);
  padding: 2rem;
  flex: 1;
`
const VideoContent = styled.div`
  flex: 1;
  height: 34.4rem;
  @media ${devicesMax.md} {
    width: 90%;
  }
`
const P = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

function ConsultContent() {
  return (
    <>
      <Header images="mentor"></Header>
      <Section>
        <Row>
          <Heading as="h1">CONSULT WITH US</Heading>
          <Underline />
        </Row>
        <ContentDetail>
          <VideoContent>
            <YoutubeEmbed embedId="" />
          </VideoContent>
          <TextDetail>
            <P>
              <strong>Toloba Sports Consult:</strong> Your Trusted Partner in
              Football Consulting
            </P>
            <P>
              At Toloba Sports Consult, we are dedicated to providing
              professional and comprehensive football consultancy services
              tailored to student-athletes, coaches, and football entities
              across the continents of Europe, Asia, Australia, and North &
              South America. Our unwavering commitment to excellence and
              inclusivity sets us apart as your trusted partner in the world of
              football.
            </P>
          </TextDetail>
        </ContentDetail>
        <ContentDetail>
          <TextDetail>
            <P>
              <strong>Global Expertise, Local Insight</strong>
            </P>
            <P>
              Our team of seasoned consultants offers the best football
              education, knowledge, and a global reach that provides
              unparalleled exposure to student-athletes and coaches. We
              understand that the football landscape is as diverse as the
              continents it spans. Our consultants combine international
              expertise with local insight to guide you towards success.
            </P>
          </TextDetail>
          <VideoContent>
            <YoutubeEmbed embedId="" />
          </VideoContent>
        </ContentDetail>
        <ContentDetail>
          <VideoContent>
            <YoutubeEmbed embedId="" />
          </VideoContent>
          <TextDetail>
            <P>
              <strong>Unlocking Potential, Maximizing Strengths </strong>
            </P>
            <P>
              At Toloba Sports Consult, we believe in analyzing the unique
              football performance of student-athletes. Our goal is to help them
              understand and play to their strengths, unlocking their full
              potential on the field. Our consulting services are designed to
              empower student-athletes to excel in their football journeys.
            </P>
          </TextDetail>
        </ContentDetail>
        <ContentDetail>
          <TextDetail>
            <P>
              <strong>Tailored Solutions for Aspirations </strong>
            </P>
            <P>
              We recognize that every student-athlete, coach, and football
              entity has distinct needs and aspirations. That&apos;s why we go
              the extra mile to find the best possible solutions. Whether
              it&apos;s assisting individual players or student-athletes,
              schools, universities, football associations, club representation,
              scouting activities, or player investments, we tailor our
              consulting services to match your goals.
            </P>
          </TextDetail>
          <VideoContent>
            <YoutubeEmbed embedId="" />
          </VideoContent>
        </ContentDetail>
        <ContentDetail>
          <VideoContent>
            <YoutubeEmbed embedId="" />
          </VideoContent>
          <TextDetail>
            <P>
              <strong>Your Path to Success Begins </strong>
            </P>
            <P>
              Here Toloba Sports Consult is your passport to success in the
              world of football. Our consulting services are designed to pave
              the way for aspiring talents, guide experienced coaches, and
              support football entities in achieving their objectives. Join us
              on this remarkable journey as we offer unparalleled consulting
              expertise to shape the future of football.
            </P>
          </TextDetail>
        </ContentDetail>
      </Section>
    </>
  )
}

export default ConsultContent
