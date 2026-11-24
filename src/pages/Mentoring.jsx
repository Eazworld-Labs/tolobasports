import Container from '../ui/Container'
import CtaBand from '../ui/CtaBand'
import SectionHead from '../ui/SectionHead'
import Block from '../ui/kit/Block'
import CardGrid from '../ui/kit/CardGrid'
import PageHero from '../ui/kit/PageHero'
import Split from '../ui/kit/Split'
import {
  closing,
  hero,
  holistic,
  options,
  optionsHeading,
  optionsIntro,
} from '../features/mentoring/mentoringCopy'

function Mentoring() {
  return (
    <>
      <PageHero {...hero} />

      <Split
        id="holistic-title"
        title={holistic.title}
        paragraphs={holistic.paragraphs}
        photo={holistic.photo}
        flip
      />

      <Block $tone="paper" aria-labelledby="options-title">
        <Container>
          <SectionHead
            id="options-title"
            title={optionsHeading}
            intro={optionsIntro}
          />
          <CardGrid
            items={options.map((o) => ({
              title: o.heading,
              text: o.msg,
              list: o.acts,
            }))}
          />
        </Container>
      </Block>

      <CtaBand id="mentoring-closing" {...closing} />
    </>
  )
}

export default Mentoring
