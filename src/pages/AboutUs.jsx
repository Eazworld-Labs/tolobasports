import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from '../ui/Container'
import CtaBand from '../ui/CtaBand'
import Picture from '../ui/Picture'
import SectionHead from '../ui/SectionHead'
import Block from '../ui/kit/Block'
import CardGrid from '../ui/kit/CardGrid'
import FactStrip from '../ui/kit/FactStrip'
import Kicker from '../ui/kit/Kicker'
import PageHero from '../ui/kit/PageHero'
import Split from '../ui/kit/Split'
import Statement from '../ui/kit/Statement'
import TextLink from '../ui/kit/TextLink'
import {
  career,
  facts,
  hero,
  record,
  scouting,
  services,
  story,
  team,
  teamHeading,
} from '../features/aboutus/aboutContent'

/* Who we are: heading on the left, story on the right, then mission and vision. */

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: var(--space-6) clamp(3.2rem, 5vw, 7.2rem);
  margin-bottom: var(--space-10);

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
    margin-bottom: var(--space-8);
  }
`

const StoryTitle = styled.h2`
  font-size: var(--heading-2);
  color: var(--color-heading);
`

const StoryText = styled.div`
  max-width: 62ch;
  font-size: var(--text-lg);
  color: var(--color-text);

  & p + p {
    margin-top: var(--space-5);
  }
`

/* Track record */

const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: var(--space-6) clamp(3.2rem, 5vw, 7.2rem);
  align-items: end;

  & p:last-child {
    max-width: 44ch;
    color: var(--color-text);
  }

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

/* Team */

const TeamGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-5);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Member = styled.li`
  & img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: var(--radius-md);
    background-color: var(--color-paper);
  }
  & h3 {
    margin-top: var(--space-4);
    font-family: var(--font-body);
    font-stretch: normal;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--color-heading);
  }
  & p {
    margin-top: var(--space-1);
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--color-text);
  }
`

const LinkWrap = styled.div`
  margin-top: var(--space-6);
`

function AboutUs() {
  return (
    <>
      <PageHero {...hero} />

      <Block aria-label="At a glance">
        <Container>
          <FactStrip facts={facts} label="At a glance" />
        </Container>
      </Block>

      <Block $tone="paper" aria-labelledby="story-title">
        <Container>
          <StoryGrid>
            <div>
              <Kicker>{story.kicker}</Kicker>
              <StoryTitle id="story-title">{story.title}</StoryTitle>
            </div>
            <StoryText>
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </StoryText>
          </StoryGrid>
          <CardGrid items={story.pillars} cols={2} />
        </Container>
      </Block>

      <Block aria-labelledby="services-title">
        <Container>
          <SectionHead
            id="services-title"
            title={services.title}
            intro={services.intro}
          />
          <CardGrid items={services.items} />
        </Container>
      </Block>

      <Split
        id="scouting-title"
        tone="paper"
        title={scouting.title}
        paragraphs={scouting.paragraphs}
        photo={scouting.photo}
        ratio="4 / 5"
        flip
      >
        <LinkWrap>
          <TextLink to={scouting.link.to}>{scouting.link.label}</TextLink>
        </LinkWrap>
      </Split>

      <Block aria-labelledby="record-title">
        <Container>
          <Kicker as="h2" id="record-title">
            {record.kicker}
          </Kicker>
          <RecordGrid>
            <Statement>{record.statement}</Statement>
            <p>{record.text}</p>
          </RecordGrid>
        </Container>
      </Block>

      {team.length > 0 && (
        <Block $tone="paper" id="team" aria-labelledby="team-title">
          <Container>
            <SectionHead id="team-title" title={teamHeading} />
            <TeamGrid>
              {team.map((person) => (
                <Member key={person.photo}>
                  <Picture
                    photo={person.photo}
                    alt=""
                    position={person.position}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                  />
                  {/* Without a name yet, the role stands in as the heading. */}
                  <h3>{person.name || person.title}</h3>
                  {person.name && <p>{person.title}</p>}
                </Member>
              ))}
            </TeamGrid>
          </Container>
        </Block>
      )}

      <CtaBand id="careers-title" {...career} />
    </>
  )
}

export default AboutUs
