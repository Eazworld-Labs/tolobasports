import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import Heading from '../../ui/Heading'
import ButtonLink from '../../ui/ButtonLink'
import Picture from '../../ui/Picture'
import Reveal from '../../ui/Reveal'
import { stagger } from '../../ui/stagger'
import VideoClip from '../../ui/VideoClip'
import {
  career,
  highlights,
  intro,
  photos,
  process,
  team,
  teamHeading,
  videos,
} from './aboutContent'

const Band = styled.section`
  padding-block: var(--space-11);
  background-color: ${(props) =>
    props.$tone === 'ink' || props.$tone === 'grey'
      ? 'var(--color-paper)'
      : 'var(--color-surface)'};
  border-top: 1px solid var(--color-line);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const SectionTitle = styled.h2`
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-heading);
`

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: var(--space-10);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-8);
  }
`

const Lead = styled.p`
  max-width: 60ch;
  margin-top: var(--space-6);
  font-size: var(--text-xl);
  line-height: 1.6;
  color: var(--color-text);
  hyphens: manual;

  & strong {
    color: var(--color-link);
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
`

const FactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Fact = styled.li`
  padding: var(--space-6) 0 0;
  border-top: 1px solid var(--color-heading);
`

const FactValue = styled.p`
  font-family: var(--font-heading);
  font-stretch: var(--heading-stretch);
  font-size: var(--heading-3);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-heading);

  &::first-letter {
    text-transform: uppercase;
  }
`

const FactCaption = styled.p`
  margin-top: var(--space-2);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--color-text);
`

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: var(--space-9);
  align-items: start;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-7);
  }
`

const ProcessPhoto = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);

  /* stays in view beside the tall list of cards (below the sticky header) */
  @media (min-width: 1025px) {
    position: sticky;
    top: 12rem;
  }
`

const Cards = styled.ul`
  display: grid;
  gap: var(--space-5);
`

const Card = styled.li`
  padding: var(--space-7);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);

  & p {
    margin-top: var(--space-3);
    hyphens: manual;
  }
`

const CardTitle = styled.h3`
  font-size: var(--heading-3);
  font-weight: 700;
  color: var(--color-heading);
`

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count}, minmax(0, 1fr));
  gap: var(--space-6);
  max-width: ${(props) => (props.$count === 1 ? '90rem' : '76rem')};
  margin-inline: auto;
  align-items: start;

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Header = styled.div`
  margin-bottom: var(--space-8);
`

const Team = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-6);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Person = styled.li`
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
`

const PersonPhoto = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background-color: var(--color-paper);
`

const PersonText = styled.div`
  padding: var(--space-5);
`

const PersonName = styled.h3`
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-heading);
  text-transform: capitalize;
  text-wrap: balance;
`

const PersonTitle = styled.p`
  margin-top: var(--space-1);
  font-size: 1.5rem;
  color: var(--color-text);
`

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  padding: var(--space-10) var(--space-10);
  border-radius: var(--radius-md);
  background-color: var(--color-band);
  color: var(--color-white);

  @media ${devicesMax.md} {
    padding: var(--space-8) var(--space-6);
  }
`

const Eyebrow = styled.p`
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: var(--color-grey-300);
`

const PanelTitle = styled.h2`
  max-width: 20ch;
  margin-top: var(--space-3);
  font-size: var(--heading-2);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-white);
`

const PanelText = styled.div`
  max-width: 62ch;
  margin-top: var(--space-6);
  font-size: var(--text-lg);
  color: var(--color-grey-200);

  & p {
    hyphens: manual;
  }
  & p + p {
    margin-top: var(--space-4);
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5) var(--space-7);
  margin-top: var(--space-8);
`

const Mail = styled.a`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-white);
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  overflow-wrap: anywhere;

  &:hover {
    color: var(--color-lime);
  }
`

function AboutDetail() {
  const embeds = videos

  return (
    <>
      <Band aria-labelledby="about-intro">
        <Container>
          <IntroGrid>
            <Reveal variant="slide-left">
              <SectionTitle id="about-intro">{intro.heading}</SectionTitle>
              <Lead>
                <strong>{intro.leadLabel}</strong> {intro.leadText}
              </Lead>
              {intro.paragraphs.map((text) => (
                <Lead key={text.slice(0, 30)}>{text}</Lead>
              ))}
            </Reveal>
            <Reveal
              as={Photo}
              variant="slide-right"
              delay={120}
              {...photos.signing}
              sizes="(max-width: 1024px) 92vw, 46vw"
              eager
            />
          </IntroGrid>
        </Container>
      </Band>

      <Band $tone="ink" aria-label="Key facts">
        <Container>
          <FactList>
            {highlights.map((fact, index) => (
              <Reveal as={Fact} key={fact.value} delay={stagger(index)}>
                <FactValue>{fact.value}</FactValue>
                <FactCaption>{fact.caption}</FactCaption>
              </Reveal>
            ))}
          </FactList>
        </Container>
      </Band>

      <Band $tone="grey" aria-label="Our scouting">
        <Container>
          <ProcessGrid>
            <Reveal
              as={ProcessPhoto}
              variant="slide-left"
              {...photos.pitch}
              sizes="(max-width: 1024px) 92vw, 40vw"
            />
            <Cards>
              {process.map((item, index) => (
                <Reveal as={Card} key={item.label} delay={stagger(index)}>
                  <CardTitle>{item.label}</CardTitle>
                  {item.paragraphs.map((text) => (
                    <p key={text.slice(0, 30)}>{text}</p>
                  ))}
                </Reveal>
              ))}
            </Cards>
          </ProcessGrid>
        </Container>
      </Band>

      {embeds.length > 0 && (
        <Band aria-label="Videos">
          <Container>
            <Videos $count={embeds.length}>
              {embeds.map((key) => (
                <VideoClip key={key} video={key} />
              ))}
            </Videos>
          </Container>
        </Band>
      )}

      {team.length > 0 && (
        <Band
          $tone={embeds.length > 0 ? 'grey' : 'white'}
          aria-labelledby="team"
        >
          <Container>
            <Reveal as={Header}>
              <Heading as="h2" id="team">
                {teamHeading}
              </Heading>
            </Reveal>
            <Team>
              {team.map((person, index) => (
                <Reveal
                  as={Person}
                  key={person.photo}
                  delay={stagger(index, { step: 100 })}
                >
                  <PersonPhoto
                    photo={person.photo}
                    alt={
                      person.name || `${person.title}, Toloba Sports Consult`
                    }
                    position={person.position}
                    sizes="(max-width: 1024px) 46vw, 22vw"
                  />
                  <PersonText>
                    {/* Without a name yet, the role stands in as the heading. */}
                    <PersonName>{person.name || person.title}</PersonName>
                    {person.name && <PersonTitle>{person.title}</PersonTitle>}
                  </PersonText>
                </Reveal>
              ))}
            </Team>
          </Container>
        </Band>
      )}

      <Band aria-labelledby="career">
        <Container>
          <Reveal as={Panel} variant="scale-in">
            <Eyebrow>{career.eyebrow}</Eyebrow>
            <PanelTitle id="career">{career.heading}</PanelTitle>
            <PanelText>
              {career.paragraphs.map((text) => (
                <p key={text.slice(0, 30)}>{text}</p>
              ))}
            </PanelText>
            <Actions>
              <ButtonLink to={career.cta.to}>{career.cta.label}</ButtonLink>
              <Mail href={`mailto:${career.email}`}>{career.email}</Mail>
            </Actions>
          </Reveal>
        </Container>
      </Band>
    </>
  )
}

export default AboutDetail
