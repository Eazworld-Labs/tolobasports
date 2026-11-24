import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from '../ui/Container'
import PageHero from '../ui/kit/PageHero'
import Picture from '../ui/Picture'
import RequestForm from '../ui/RequestForm'
import SectionHead from '../ui/SectionHead'
import {
  applicationForm,
  applyHeading,
  applyIntro,
  intro,
  pageTitle,
  stories,
  storiesHeading,
  storiesIntro,
} from '../features/players/playersCopy'
import { steps } from '../features/home/homeContent'

const Block = styled.section`
  padding-block: clamp(5.6rem, 8vw, 9.6rem);
  background-color: ${(props) =>
    props.$tone === 'paper' ? 'var(--color-paper)' : 'var(--color-surface)'};
  scroll-margin-top: 8rem;

  & + & {
    border-top: 1px solid var(--color-line);
  }
`

const Stories = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Story = styled.li`
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  & div {
    padding: var(--space-6);
  }
  & h3 {
    font-size: 2rem;
    color: var(--color-heading);
  }
  & dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-1) var(--space-3);
    margin-top: var(--space-3);
    font-size: 1.5rem;
  }
  & dt {
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--color-text);
  }
  & dd {
    color: var(--color-heading);
  }
  & p {
    margin-top: var(--space-4);
    color: var(--color-text);
  }
`

const StepList = styled.ol`
  display: grid;
  gap: var(--space-5);
  margin-top: var(--space-6);
  list-style: none;
  counter-reset: step;

  & li {
    display: grid;
    grid-template-columns: 3.6rem 1fr;
    gap: var(--space-4);
    counter-increment: step;
  }
  & li::before {
    content: counter(step);
    display: grid;
    place-items: center;
    width: 3.6rem;
    height: 3.6rem;
    border: 1.5px solid var(--color-heading);
    border-radius: 50%;
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--color-heading);
  }
  & h3 {
    font-family: var(--font-body);
    font-stretch: normal;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--color-heading);
  }
  & p {
    font-size: 1.5rem;
    color: var(--color-text);
  }
`

const ApplyGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(3.2rem, 5vw, 7.2rem);

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const ApplyTitle = styled.h2`
  font-size: var(--heading-2);
  color: var(--color-heading);
`

const ApplyIntro = styled.p`
  margin-top: var(--space-4);
  color: var(--color-text);
`

const Small = styled.h3`
  margin-top: var(--space-9);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-line);
  font-size: 1.8rem;
  color: var(--color-heading);
`

function Players() {
  return (
    <>
      <PageHero
        crumb={pageTitle}
        kicker="For athletes"
        title="Get scouted and"
        highlight="mentored"
        lead={intro}
        actions={[{ label: 'Apply as a player', to: '#apply' }]}
        photo={{ photo: 'staff-pitch-selfie', position: '50% 40%' }}
      />

      {stories.length > 0 && (
        <Block aria-labelledby="stories-title">
          <Container>
            <SectionHead
              id="stories-title"
              title={storiesHeading}
              intro={storiesIntro}
            />
            <Stories>
              {stories.map((s) => (
                <Story key={s.name}>
                  {s.photo && (
                    <Picture
                      photo={s.photo}
                      sizes="(max-width: 1024px) 92vw, 30vw"
                    />
                  )}
                  <div>
                    <h3>{s.name}</h3>
                    <dl>
                      {s.club && (
                        <>
                          <dt>Club</dt>
                          <dd>{s.club}</dd>
                        </>
                      )}
                      {s.highlight && (
                        <>
                          <dt>Highlight</dt>
                          <dd>{s.highlight}</dd>
                        </>
                      )}
                    </dl>
                    {s.text && <p>{s.text}</p>}
                  </div>
                </Story>
              ))}
            </Stories>
          </Container>
        </Block>
      )}

      <Block $tone="paper" id="apply" aria-labelledby="apply-title">
        <ApplyGrid>
          <div>
            <ApplyTitle id="apply-title">{applyHeading}</ApplyTitle>
            <ApplyIntro>{applyIntro}</ApplyIntro>
            <Small>{steps.heading}</Small>
            <StepList>
              {steps.items.map((item) => (
                <li key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </StepList>
          </div>
          <RequestForm {...applicationForm} />
        </ApplyGrid>
      </Block>
    </>
  )
}

export default Players
