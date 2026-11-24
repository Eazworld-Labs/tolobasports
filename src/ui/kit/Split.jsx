import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../Container'
import Picture from '../Picture'
import Block from './Block'
import Kicker from './Kicker'

// Heading and text beside a photo (or any `media`). `flip` puts the media first.
const Grid = styled(Container)`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$media ? 'minmax(0, 1fr) minmax(0, 1fr)' : 'minmax(0, 1fr)'};
  gap: clamp(3.2rem, 5vw, 7.2rem);
  align-items: center;

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Text = styled.div`
  max-width: 60ch;
  order: ${(props) => (props.$flip ? 2 : 1)};

  @media ${devicesMax.lg} {
    order: 1;
  }
`

const Title = styled.h2`
  font-size: var(--heading-2);
  color: var(--color-heading);
`

const Body = styled.div`
  margin-top: var(--space-5);
  color: var(--color-text);

  & p + p {
    margin-top: var(--space-4);
  }
`

const Media = styled.div`
  order: ${(props) => (props.$flip ? 1 : 2)};

  @media ${devicesMax.lg} {
    order: 2;
  }
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: ${(props) => props.$ratio || '4 / 3'};
  object-fit: cover;
  border-radius: var(--radius-md);
`

function Split({
  id,
  kicker,
  title,
  paragraphs = [],
  photo,
  media,
  ratio,
  flip,
  tone,
  children,
}) {
  const side =
    media ||
    (photo && (
      <Photo
        photo={photo.photo}
        position={photo.position}
        $ratio={ratio}
        sizes="(max-width: 1024px) 92vw, 46vw"
      />
    ))

  return (
    <Block $tone={tone} aria-labelledby={id}>
      <Grid $media={Boolean(side)}>
        <Text $flip={flip}>
          {kicker && <Kicker>{kicker}</Kicker>}
          <Title id={id}>{title}</Title>
          <Body>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Body>
          {children}
        </Text>
        {side && <Media $flip={flip}>{side}</Media>}
      </Grid>
    </Block>
  )
}

export default Split
