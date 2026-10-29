import styled from 'styled-components'
import CtaBand from '../../ui/CtaBand'
import EditorialRow from '../../ui/EditorialRow'
import Header from '../../ui/Header'
import { cta, pageTitle, sections } from './consultCopy'

const Page = styled.div`
  padding-block: var(--space-9) 0;
`

function ConsultContent() {
  const rows = sections.slice(0, -1)
  const closing = sections[sections.length - 1]

  return (
    <>
      <Header images="mentor" title={pageTitle} flush />
      <Page>
        {rows.map((section, index) => (
          <EditorialRow
            key={section.heading}
            id={`consult-${index}`}
            heading={section.heading}
            paragraphs={section.paragraphs}
            embedId={section.embedId}
            videoTitle={section.videoTitle}
            image={section.image}
            flip={index % 2 === 1}
            tone={index % 2 === 1 ? 'grey' : 'white'}
          />
        ))}
      </Page>
      <CtaBand
        id="consult-closing"
        heading={closing.heading}
        paragraphs={closing.paragraphs}
        cta={cta}
      />
    </>
  )
}

export default ConsultContent
