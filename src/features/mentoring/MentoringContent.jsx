import styled from 'styled-components'
import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import Underline from '../../ui/UnderLine'
import GetMentored from './GetMentored'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledContent = styled.div`
  padding: 4rem;
  display: flex;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 2rem;
  }
`
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex: 1;

  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-secoundary);
`
const P = styled.p`
  text-align: justify;

  @media ${devicesMax.md} {
    font-size: 1.2rem;
  }
`
const ImgBox = styled.div`
  height: 300px;
  flex: 1;
`
const Img = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
`
const Strong = styled.strong`
  color: var(--color-secoundary);
`

function MentoringContent() {
  return (
    <>
      <Header images="mentor" />
      <Section>
        <Row>
          <Heading as="h1">Nurturing Excellence Through Mentorship</Heading>
          <Underline />
        </Row>
        <StyledContent>
          <StyledText>
            <P>
              <Strong>At Toloba Sports Consult: </Strong>We understand the
              transformative power of the right mentoring programs for young
              student-athletes. The journey of growth extends beyond the
              physical realm, and it&apos;s our mission to guide them towards
              maturity in both their mental and physical aspects.
            </P>
          </StyledText>
          <ImgBox>
            <Img src="../../../pc15.jpg" alt="pc15" loading="lazy" />
          </ImgBox>
        </StyledContent>

        <StyledContent>
          <ImgBox>
            <Img src="../../../pc16.jpg" alt="pc16" loading="lazy" />
          </ImgBox>
          <StyledText>
            <P>
              <Strong>Mentoring for Holistic Development: </Strong>
              Our mentoring programs at Toloba Sports Consult go beyond teaching
              football techniques; they instill qualities that shape
              student-athletes into well-rounded individuals. We believe that
              true excellence involves not only excelling on the field but also
              adopting the right attitude, work ethic, and mannerisms in life.
            </P>
          </StyledText>
        </StyledContent>
      </Section>
      <Section>
        <Row>
          <Heading as="h2">GET MONTORED</Heading>
          <Underline />
        </Row>
        <GetMentored />
      </Section>
    </>
  )
}

export default MentoringContent
