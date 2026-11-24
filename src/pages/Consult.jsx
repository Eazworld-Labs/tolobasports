import Container from '../ui/Container'
import CtaBand from '../ui/CtaBand'
import SectionHead from '../ui/SectionHead'
import Block from '../ui/kit/Block'
import CardGrid from '../ui/kit/CardGrid'
import PageHero from '../ui/kit/PageHero'
import Split from '../ui/kit/Split'
import {
  audience,
  closing,
  expertise,
  hero,
  potential,
} from '../features/consult/consultCopy'

function Consult() {
  return (
    <>
      <PageHero {...hero} />

      <Block aria-labelledby="audience-title">
        <Container>
          <SectionHead
            id="audience-title"
            title={audience.title}
            intro={audience.intro}
          />
          <CardGrid items={audience.items.map((title) => ({ title }))} />
        </Container>
      </Block>

      <Split
        id="expertise-title"
        tone="paper"
        title={expertise.title}
        paragraphs={expertise.paragraphs}
        photo={expertise.photo}
        flip
      />

      <Split
        id="potential-title"
        title={potential.title}
        paragraphs={potential.paragraphs}
        photo={potential.photo}
      />

      <CtaBand id="consult-closing" {...closing} />
    </>
  )
}

export default Consult
