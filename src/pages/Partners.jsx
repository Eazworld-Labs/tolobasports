import Container from '../ui/Container'
import CtaBand from '../ui/CtaBand'
import SectionHead from '../ui/SectionHead'
import Block from '../ui/kit/Block'
import Kicker from '../ui/kit/Kicker'
import PageHero from '../ui/kit/PageHero'
import RowList from '../ui/kit/RowList'
import Split from '../ui/kit/Split'
import Statement from '../ui/kit/Statement'
import {
  closing,
  hero,
  items,
  network,
  vision,
  whyHeading,
  whyIntro,
} from '../features/partners/partnersCopy'

function Partners() {
  return (
    <>
      <PageHero {...hero} />

      <Block aria-labelledby="vision-title">
        <Container>
          <Kicker as="h2" id="vision-title">
            {vision.title}
          </Kicker>
          <Statement>{vision.paragraphs[0]}</Statement>
        </Container>
      </Block>

      <Block $tone="paper" aria-labelledby="why-title">
        <Container>
          <SectionHead id="why-title" title={whyHeading} intro={whyIntro} />
          <RowList items={items} />
        </Container>
      </Block>

      <Split
        id="network-title"
        title={network.title}
        paragraphs={network.paragraphs}
        photo={network.photo}
        flip
      />

      <CtaBand id="partners-closing" {...closing} />
    </>
  )
}

export default Partners
