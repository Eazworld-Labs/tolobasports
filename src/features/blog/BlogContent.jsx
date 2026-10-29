import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Box = styled.div`
  padding: 4rem;
`

const Img = styled(LazyLoadImage)`
  height: 40rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`
const BoxHeader = styled.div`
  margin-bottom: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const BoxHeading = styled.div`
  flex-basis: 40%;
  text-align: center;
  padding: 2rem;
`
const P = styled.p`
  text-align: justify;
  hyphens: none;
`
const BoxText = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 4rem;
`

function BlogContent() {
  return (
    <Box>
      <BoxHeader>
        <Img src="/musah11.jpeg" alt="musah 11" loading="lazy" />
        <BoxHeading>
          <Heading as="h4">
            A Pivotal Meeting in Abu Dhabi: The Tale of Musah Toloba and Daniel
            Curcio
          </Heading>
        </BoxHeading>
      </BoxHeader>
      <BoxText>
        <P>
          In the vibrant heart of Abu Dhabi, a momentous meeting unfolded
          between two exceptional individuals. Musah Toloba, the visionary
          Founder and President of the Toloba Group of Companies, and Daniel
          Curcio, an esteemed figure from Italy, convened to shape the destiny
          of football in Ghana. Their encounter was far from ordinary; it was
          the genesis of an extraordinary project – the Fifco tournament
          conference, a groundbreaking event set to unite football enthusiasts
          from around the globe. Beneath the golden rays of the Abu Dhabi sun,
          Musah Toloba and Daniel Curcio&pos;s rendezvous held profound
          significance. Daniel, as the head of referees in Europe, bore the
          responsibility of ensuring the integrity and professionalism of the
          tournament. Their meeting was a fusion of minds, where they mapped out
          the blueprint for the conference, one that aimed to nurture talent,
          elevate sportsmanship, and redefine Ghanaian football. With unwavering
          seriousness, the two luminaries discussed the intricacies of the
          event. Daniel&pos;s mastery of football officiating was integral to
          ensuring a tournament that would be not just fair but also
          extraordinary. As palm trees swayed in the gentle Abu Dhabi breeze,
          Musah Toloba and Daniel Curcio shared their ambitions and strategies
          for the event. Their shared dream was to empower aspiring footballers,
          enriching the sports scene in Ghana while upholding the ideals of fair
          play and competition. Their handshake sealed a commitment, as Daniel
          Curcio embraced the challenge of overseeing the referees for the Fifco
          tournament conference in Ghana. With the die-cast, their collaboration
          marked the inception of an exhilarating journey toward a brighter
          future for Ghanaian football. Little did they know that this
          partnership would give birth to a tournament that would capture hearts
          worldwide, setting new benchmarks for sportsmanship and fair play, not
          only in Ghana but across the global football stage. The story of their
          collaboration was merely the first chapter in a narrative of ambition,
          dedication, and the unifying power of sport.
        </P>
      </BoxText>
    </Box>
  )
}

export default BlogContent
