import styled from 'styled-components'
import Container from '../ui/Container'
import PageHero from '../ui/kit/PageHero'
import RequestForm from '../ui/RequestForm'
import { devicesMax } from '../styles/BreakPoint'
import ContactInfo from '../features/contact/ContactInfo'
import { bookingForm, breadcrumb, intro } from '../features/contact/contactCopy'

const Wrap = styled.div`
  padding-block: var(--space-10) var(--space-11);

  @media ${devicesMax.md} {
    padding-block: var(--space-8) var(--space-9);
  }
`

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(3.2rem, 5vw, 7.2rem);

  @media ${devicesMax.lg} {
    grid-template-columns: minmax(0, 1fr);
  }
`

function Contact() {
  return (
    <>
      <PageHero
        crumb={breadcrumb}
        kicker="Contact"
        title="Book a"
        highlight="consultation"
        lead={intro}
      />
      <Wrap id="book">
        <Grid>
          <ContactInfo />
          <RequestForm {...bookingForm} />
        </Grid>
      </Wrap>
    </>
  )
}

export default Contact
