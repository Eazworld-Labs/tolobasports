import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { HiOutlineIdentification } from 'react-icons/hi'
import Button from '../../ui/Button'
import Row from '../../ui/Row'
import UnderLine from '../../ui/UnderLine'
import { devicesMax } from '../../styles/BreakPoint'
import { NavLink } from 'react-router-dom'

const ContactBox = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 20px;
  padding: 4rem 12rem;
  @media ${devicesMax.lg} {
    padding: 2rem 8rem;
  }
  @media ${devicesMax.md} {
    grid-template-columns: 1fr;
  }
  @media ${devicesMax.sm} {
    padding: 2rem 2rem;
  }
`
const ContactCard = styled.div`
  border: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-sm);
`
const ContentBox = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
  @media ${devicesMax.lg} {
    width: 70%;
    padding: 1rem;
  }
  @media ${devicesMax.md} {
    width: 80%;
  }
  @media ${devicesMax.sm} {
    width: 90%;
  }
`
const IconBox = styled.div`
  border-radius: 100%;
  height: 7rem;
  width: 7rem;
  background-color: var(--color-ink-700);
  margin-bottom: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
const Icons = styled(HiOutlineIdentification)`
  color: var(--color-signal);
  font-size: 4rem;
`
const H3 = styled.h3`
  font-family: var(--font-body);
  font-weight: 600;
  margin-bottom: 3rem;
  font-size: 2rem;
`
const P = styled.p`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.8rem;
`
function ContactInfo() {
  return (
    <Section type="contact">
      <Row>
        <Heading as="h1">Contact Information</Heading>
        <UnderLine />
      </Row>

      <ContactBox>
        <ContactCard>
          <ContentBox>
            <IconBox>
              <Icons />
            </IconBox>
            <H3>M TOLOBA SPORTS - Ghana</H3>
            <P>Osabu st, abelempke GA-16A-9330</P>
            <NavLink to="https://www.google.com/maps/@5.6120895,-0.2290935,17z?hl=en-GH&entry=ttu">
              <Button pros="contact">Show Map</Button>
            </NavLink>
          </ContentBox>
        </ContactCard>
      </ContactBox>
    </Section>
  )
}

export default ContactInfo
