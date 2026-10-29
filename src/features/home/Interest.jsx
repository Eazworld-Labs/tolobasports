import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { devicesMax } from '../../styles/BreakPoint'
import Heading from '../../ui/Heading'
import Reveal from '../../ui/Reveal'
import { stagger } from '../../ui/stagger'
import { interests, interestsHeading } from './homeContent'

const Wrap = styled.section`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-11) var(--container-pad);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const Header = styled.div`
  margin-bottom: var(--space-8);
  text-align: center;
`

const Grid = styled.ul`
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

const Photo = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--color-ink-900);
  box-shadow: var(--shadow-sm);
  color: var(--color-white);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  /* dark gradient so the title stays readable on any photo */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(20, 26, 38, 0.95) 0%,
      rgba(20, 26, 38, 0.6) 40%,
      rgba(20, 26, 38, 0) 75%
    );
  }

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: var(--shadow-md);
  }
  &:hover ${Photo} {
    transform: scale(1.05);
  }

  @media ${devicesMax.sm} {
    aspect-ratio: 4 / 3;
  }
`

const Body = styled.div`
  position: relative;
  z-index: 2;
  padding: var(--space-5);
`

const Title = styled.h3`
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 700;
  line-height: 1.25;
  text-wrap: balance;
`

const Explore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-lime);

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    transition: transform 0.2s;
  }
  ${Card}:hover & svg {
    transform: translateX(0.4rem);
  }
`

function Interest() {
  return (
    <Wrap id="interests" aria-labelledby="interest-title">
      <Reveal as={Header}>
        <Heading as="h2" id="interest-title">
          {interestsHeading}
        </Heading>
      </Reveal>
      <Grid>
        {interests.map((item, index) => (
          <Reveal as="li" key={item.id} delay={stagger(index)}>
            <Card to={item.to}>
              <Photo
                src={`/optimized/${item.image}-480.webp`}
                srcSet={`/optimized/${item.image}-480.webp 480w, /optimized/${item.image}-800.webp ${item.imageWidth}w`}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                width={item.imageWidth}
                height={item.imageHeight}
                alt={item.imageAlt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: item.position }}
              />
              <Body>
                <Title>{item.title}</Title>
                <Explore>
                  Explore <HiArrowRight aria-hidden="true" />
                </Explore>
              </Body>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Wrap>
  )
}

export default Interest
