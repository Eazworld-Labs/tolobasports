import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import CtaBand from '../../ui/CtaBand'
import EditorialRow from '../../ui/EditorialRow'
import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Picture from '../../ui/Picture'
import Reveal from '../../ui/Reveal'
import { stagger } from '../../ui/stagger'
import Underline from '../../ui/UnderLine'
import {
  breadcrumb,
  cta,
  intro,
  options,
  optionsHeading,
  pageTitle,
} from './mentoringCopy'

const Page = styled.div`
  padding-block: var(--space-9) 0;
`

const Options = styled.section`
  padding-block: var(--space-11);
  background-color: var(--color-grey-50);

  @media ${devicesMax.md} {
    padding-block: var(--space-9);
  }
`

const OptionsHeader = styled.div`
  margin-bottom: var(--space-9);
  text-align: center;
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-6);

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Card = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--radius);
  background-color: var(--color-white);
`

const Photo = styled(Picture)`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
`

const Body = styled.div`
  flex: 1;
  padding: var(--space-6);
  border-top: 0.4rem solid var(--color-signal);
`

const CardTitle = styled.h3`
  font-size: var(--heading-3);
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--color-ink-900);
`

const Msg = styled.p`
  margin-top: var(--space-3);
  color: var(--color-grey-700);
`

const Acts = styled.ul`
  display: grid;
  gap: var(--space-2);
  margin-top: var(--space-4);
`

const Act = styled.li`
  position: relative;
  padding-left: var(--space-6);
  color: var(--color-grey-700);

  &::before {
    content: '';
    position: absolute;
    top: 0.7em;
    left: 0;
    width: 1rem;
    height: 0.4rem;
    border-radius: var(--radius);
    background-color: var(--color-signal-600);
  }
`

function MentoringContent() {
  return (
    <>
      <Header images="mentor" title={pageTitle} crumb={breadcrumb} flush />
      <Page>
        {intro.map((row, index) => (
          <EditorialRow
            key={row.label}
            id={`mentor-${index}`}
            // The first block is a bold lead-in label, not a heading.
            heading={index === 0 ? undefined : row.label}
            label={row.label}
            paragraphs={
              index === 0 ? [{ label: row.label, text: row.text }] : [row.text]
            }
            image={row.image}
            flip={index % 2 === 1}
            tone={index % 2 === 1 ? 'grey' : 'white'}
          />
        ))}
      </Page>

      <Options aria-labelledby="mentor-options">
        <Container>
          <Reveal as={OptionsHeader}>
            <Heading as="h2" id="mentor-options">
              {optionsHeading}
            </Heading>
            <Underline />
          </Reveal>
          <Grid>
            {options.map((option, index) => (
              <Reveal
                as={Card}
                key={option.heading}
                delay={stagger(index % 3, { step: 100 })}
              >
                <Photo
                  base={option.image.base}
                  small={480}
                  large={800}
                  width={option.image.width}
                  height={option.image.height}
                  alt={option.image.alt}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                />
                <Body>
                  <CardTitle>{option.heading}</CardTitle>
                  {option.msg && <Msg>{option.msg}</Msg>}
                  <Acts>
                    {option.acts.map((act) => (
                      <Act key={act}>{act}</Act>
                    ))}
                  </Acts>
                </Body>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Options>

      <CtaBand label="Contact us" cta={cta} />
    </>
  )
}

export default MentoringContent
