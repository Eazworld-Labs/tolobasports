import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import CtaBand from '../../ui/CtaBand'
import Heading from '../../ui/Heading'
import Picture from '../../ui/Picture'
import Underline from '../../ui/UnderLine'
import PartnerLogos from './PartnerLogos'
import { cta, intro, items, whyHeading } from './partnersCopy'

const Band = styled.section`
  padding-block: var(--space-11);
  background-color: ${(props) =>
    props.$tone === 'ink'
      ? 'var(--color-ink-900)'
      : props.$tone === 'grey'
        ? 'var(--color-grey-50)'
        : 'var(--color-white)'};

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-10);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-7);
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
`

const Accent = styled.span`
  display: block;
  width: 7.2rem;
  height: 0.6rem;
  margin-bottom: var(--space-5);
  border-radius: var(--radius-pill);
  background-color: var(--color-signal);
`

const Lead = styled.p`
  max-width: 60ch;
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--color-grey-700);
  hyphens: manual;

  & strong {
    color: var(--color-signal-600);
  }
`

const SectionHeader = styled.div`
  margin-bottom: var(--space-9);
  text-align: center;
`

const LightHeading = styled(Heading)`
  color: var(--color-white);
`

const LimeUnderline = styled(Underline)`
  background-color: var(--color-lime);
`

const Cards = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: var(--space-6);

  & > li {
    grid-column: span 2;
  }
  & > li:nth-child(n + 4) {
    grid-column: span 3;
  }

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    & > li,
    & > li:nth-child(n + 4) {
      grid-column: span 1;
    }
    & > li:last-child {
      grid-column: span 2;
    }
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);

    & > li,
    & > li:nth-child(n + 4),
    & > li:last-child {
      grid-column: span 1;
    }
  }
`

const Card = styled.li`
  height: 100%;
  padding: var(--space-8);
  border-top: 0.4rem solid var(--color-lime);
  border-radius: var(--radius-sm);
  background-color: var(--color-ink-700);
  color: var(--color-grey-200);
`

const Number = styled.p`
  font-family: var(--font-heading);
  font-size: var(--heading-2);
  font-weight: 800;
  line-height: 1;
  color: var(--color-lime);
`

const CardTitle = styled.h3`
  margin-top: var(--space-4);
  font-size: var(--heading-3);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-white);
`

const CardText = styled.p`
  margin-top: var(--space-3);
  hyphens: manual;
`

function PartContent() {
  return (
    <>
      <Band aria-label="Partner with us">
        <Container>
          <IntroGrid>
            <Photo
              {...intro.image}
              sizes="(max-width: 1024px) 92vw, 46vw"
              eager
            />
            <div>
              <Accent aria-hidden="true" />
              <Lead>
                <strong>{intro.label}</strong> {intro.text}
              </Lead>
            </div>
          </IntroGrid>
        </Container>
      </Band>

      <Band $tone="ink" aria-labelledby="why-partner">
        <Container>
          <SectionHeader>
            <LightHeading as="h2" id="why-partner">
              {whyHeading}
            </LightHeading>
            <LimeUnderline />
          </SectionHeader>
          <Cards>
            {items.map((item, index) => (
              <Card key={item.label}>
                <Number aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </Number>
                <CardTitle>{item.label}</CardTitle>
                <CardText>{item.text}</CardText>
              </Card>
            ))}
          </Cards>
        </Container>
      </Band>

      <Band $tone="grey" aria-label="Partner logos">
        <Container>
          <PartnerLogos />
        </Container>
      </Band>

      <CtaBand label="Contact us" cta={cta} />
    </>
  )
}

export default PartContent
