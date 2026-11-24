import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { devicesMax } from '../../styles/BreakPoint'
import ButtonLink from '../../ui/ButtonLink'
import Container from '../../ui/Container'
import Picture from '../../ui/Picture'
import VideoClip from '../../ui/VideoClip'
import { PHOTOS } from '../../ui/photos'
import SectionHead from '../../ui/SectionHead'
import { field, paths, services, steps } from './homeContent'

const Block = styled.section`
  padding-block: clamp(5.6rem, 8vw, 10.4rem);
  background-color: ${(props) =>
    props.$tone === 'paper' ? 'var(--color-paper)' : 'var(--color-white)'};

  & + & {
    border-top: 1px solid var(--color-line);
  }
`

const MoreLink = styled(Link)`
  font-weight: 600;
  color: var(--color-signal);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;

  &:hover {
    color: var(--color-signal-700);
  }
`

/* How can we help you? */

const PathGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  overflow: hidden;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Path = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-7) var(--space-6);
  background-color: var(--color-white);

  & + & {
    border-left: 1px solid var(--color-line);
  }
  @media ${devicesMax.lg} {
    & + & {
      border-left: 0;
      border-top: 1px solid var(--color-line);
    }
  }
`

const Who = styled.p`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-ink-500);
`

const PathTitle = styled.h3`
  font-size: 2.2rem;
  line-height: 1.2;
  color: var(--color-ink-900);
`

const PathText = styled.p`
  flex: 1;
  color: var(--color-ink-500);
`

export function Paths() {
  return (
    <Block aria-labelledby="paths-title">
      <Container>
        <SectionHead
          id="paths-title"
          title={paths.heading}
          intro={paths.intro}
        />
        <PathGrid>
          {paths.items.map((item) => (
            <Path key={item.title}>
              <Who>{item.who}</Who>
              <PathTitle>{item.title}</PathTitle>
              <PathText>{item.text}</PathText>
              <MoreLink to={item.cta.to}>{item.cta.label}</MoreLink>
            </Path>
          ))}
        </PathGrid>
      </Container>
    </Block>
  )
}

/* What we do */

const ServiceGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(3.2rem, 5vw, 6.4rem);
  align-items: start;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const ServicePhoto = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-md);

  @media ${devicesMax.lg} {
    aspect-ratio: 16 / 10;
  }
`

const ServiceTitle = styled.h2`
  margin-bottom: var(--space-7);
  font-size: var(--heading-2);
  color: var(--color-ink-900);
`

const Service = styled.li`
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  gap: var(--space-2) var(--space-5);
  padding-block: var(--space-6);
  border-top: 1px solid var(--color-line);

  &:last-child {
    border-bottom: 1px solid var(--color-line);
  }
  & h3 {
    font-size: 2rem;
    color: var(--color-ink-900);
  }
  & p {
    color: var(--color-ink-500);
  }
  & a {
    grid-column: 2;
  }

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);

    & a {
      grid-column: 1;
    }
  }
`

export function Services() {
  return (
    <Block aria-labelledby="services-title">
      <ServiceGrid>
        <ServicePhoto
          photo={services.photo}
          sizes="(max-width: 1024px) 92vw, 40vw"
          position="50% 30%"
        />
        <div>
          <ServiceTitle id="services-title">{services.heading}</ServiceTitle>
          <ul>
            {services.items.map((item) => (
              <Service key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <MoreLink to={item.to}>
                  About {item.title.toLowerCase()}
                </MoreLink>
              </Service>
            ))}
          </ul>
        </div>
      </ServiceGrid>
    </Block>
  )
}

/* From application to opportunity: a real sequence, so the steps are numbered. */

const StepList = styled.ol`
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  counter-reset: step;

  &::before {
    content: '';
    position: absolute;
    top: 1.8rem;
    left: 1.8rem;
    right: 1.8rem;
    border-top: 1px dashed var(--color-line-strong);
  }

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: var(--space-8);

    &::before {
      display: none;
    }
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Step = styled.li`
  padding-right: var(--space-6);
  counter-increment: step;

  &::before {
    content: counter(step);
    position: relative;
    display: grid;
    place-items: center;
    width: 3.6rem;
    height: 3.6rem;
    margin-bottom: var(--space-5);
    border: 1.5px solid var(--color-ink-900);
    border-radius: 50%;
    background-color: var(--color-paper);
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--color-ink-900);
  }
  & h3 {
    margin-bottom: var(--space-2);
    font-family: var(--font-body);
    font-stretch: normal;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0;
    color: var(--color-ink-900);
  }
  & p {
    font-size: 1.5rem;
    color: var(--color-ink-500);
  }
`

export function Steps() {
  return (
    <Block $tone="paper" aria-labelledby="steps-title">
      <Container>
        <SectionHead
          id="steps-title"
          title={steps.heading}
          intro={steps.intro}
        />
        <StepList>
          {steps.items.map((item) => (
            <Step key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Step>
          ))}
        </StepList>
      </Container>
    </Block>
  )
}

/* In the field */

const Reel = styled(VideoClip)`
  max-width: 96rem;
  margin-bottom: var(--space-8);
`

const FieldGrid = styled.ul`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: var(--space-4);

  @media ${devicesMax.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const FieldPhoto = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-md);
`

const FieldCaption = styled.p`
  margin-top: var(--space-3);
  font-size: 1.4rem;
  color: var(--color-ink-500);
`

const FieldFoot = styled.div`
  margin-top: var(--space-8);
`

export function Field() {
  return (
    <Block aria-labelledby="field-title">
      <Container>
        <SectionHead
          id="field-title"
          title={field.heading}
          intro={field.intro}
        />
        {field.video && <Reel video={field.video} />}
        <FieldGrid>
          {field.photos.map((key) => (
            <li key={key}>
              <figure>
                <FieldPhoto
                  photo={key}
                  alt=""
                  sizes="(max-width: 768px) 92vw, 33vw"
                />
                {/* The caption describes the photo, so the img itself is alt="". */}
                <FieldCaption as="figcaption">{PHOTOS[key].alt}</FieldCaption>
              </figure>
            </li>
          ))}
        </FieldGrid>
        <FieldFoot>
          <ButtonLink to={field.cta.to} $variant="outline">
            {field.cta.label}
          </ButtonLink>
        </FieldFoot>
      </Container>
    </Block>
  )
}
