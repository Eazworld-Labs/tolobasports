import styled from 'styled-components'
import Container from '../ui/Container'
import Header from '../ui/Header'
import { devicesMax } from '../styles/BreakPoint'
import ContactInfo from '../features/contact/ContactInfo'
import ContactForm from '../features/contact/ContactForm'
import { breadcrumb, pageTitle } from '../features/contact/contactCopy'

const Wrap = styled.div`
  padding-block: var(--space-10) var(--space-11);
  background-color: var(--color-grey-50);

  @media ${devicesMax.md} {
    padding-block: var(--space-8) var(--space-9);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: var(--space-8);

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

function Contact() {
  return (
    <>
      <Header images="contact" title={pageTitle} crumb={breadcrumb} flush />
      <Wrap>
        <Container>
          <Grid>
            <ContactInfo />
            <ContactForm />
          </Grid>
        </Container>
      </Wrap>
    </>
  )
}

export default Contact
