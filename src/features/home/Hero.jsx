import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import Container from '../../ui/Container'
import ScoutRoute from './ScoutRoute'
import { hero } from './homeContent'

const Band = styled.section`
  padding-block: clamp(4.8rem, 7vw, 9.6rem) clamp(4.8rem, 6vw, 8rem);
  background-color: var(--color-paper);
  border-bottom: 1px solid var(--color-line);
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(3.2rem, 5vw, 7.2rem);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Kicker = styled.p`
  margin-bottom: var(--space-5);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  color: var(--color-text);
`

// The one place the type is pushed: Archivo at its widest, heaviest setting.
const Title = styled.h1`
  font-size: clamp(3.8rem, 1.6rem + 3.4vw, 6.4rem);
  font-weight: 800;
  font-stretch: 125%;
  line-height: 1.02;
  letter-spacing: -0.025em;
  color: var(--color-heading);

  & em {
    font-style: normal;
    color: var(--color-link);
  }
`

const Lead = styled.p`
  max-width: 34em;
  margin-top: var(--space-6);
  font-size: var(--text-lg);
  color: var(--color-text);
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-7);
`

const Creds = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  margin-top: var(--space-8);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-line);
  font-size: 1.5rem;
  color: var(--color-text);

  & strong {
    font-weight: 600;
    color: var(--color-heading);
  }
`

function Hero() {
  return (
    <Band aria-labelledby="hero-title">
      <Grid>
        <div>
          <Kicker>{hero.kicker}</Kicker>
          <Title id="hero-title">
            {hero.titleStart} <em>{hero.titleHighlight}</em>
          </Title>
          <Lead>{hero.lead}</Lead>
          <Actions>
            <ButtonLink to={hero.primaryCta.to}>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} $variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </Actions>
          <Creds>
            {hero.creds.map((c) => (
              <li key={c.strong}>
                <strong>{c.strong}</strong> {c.text}
              </li>
            ))}
          </Creds>
        </div>
        <ScoutRoute />
      </Grid>
    </Band>
  )
}

export default Hero
