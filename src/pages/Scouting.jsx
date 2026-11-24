import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import Container from '../ui/Container'
import CtaBand from '../ui/CtaBand'
import SectionHead from '../ui/SectionHead'
import VideoClip from '../ui/VideoClip'
import Block from '../ui/kit/Block'
import FactStrip from '../ui/kit/FactStrip'
import PageHero from '../ui/kit/PageHero'
import Split from '../ui/kit/Split'
import StepList from '../ui/kit/StepList'
import ScoutRoute from '../features/home/ScoutRoute'
import { steps } from '../features/home/homeContent'
import {
  closing,
  facts,
  hero,
  process,
  visits,
  world,
} from '../features/scouting/scoutingCopy'

const FactsWrap = styled.div`
  margin-top: var(--space-9);
`

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6);
  max-width: 76rem;
  align-items: start;

  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

function Scouting() {
  return (
    <>
      <PageHero {...hero} media={<ScoutRoute />} />

      <Split
        id="process-title"
        title={process.title}
        paragraphs={process.paragraphs}
        photo={process.photo}
        ratio="4 / 5"
      >
        <FactsWrap>
          <FactStrip facts={facts} />
        </FactsWrap>
      </Split>

      <Block $tone="paper" aria-labelledby="steps-title">
        <Container>
          <SectionHead
            id="steps-title"
            title={steps.heading}
            intro={steps.intro}
          />
          <StepList items={steps.items} tone="paper" />
        </Container>
      </Block>

      <Split
        id="world-title"
        title={world.title}
        paragraphs={world.paragraphs}
        photo={world.photo}
        flip
      />

      <Block $tone="paper" aria-labelledby="visits-title">
        <Container>
          <SectionHead
            id="visits-title"
            title={visits.title}
            intro={visits.intro}
          />
          <Videos>
            {visits.videos.map((key) => (
              <VideoClip key={key} video={key} />
            ))}
          </Videos>
        </Container>
      </Block>

      <CtaBand id="scouting-closing" {...closing} />
    </>
  )
}

export default Scouting
