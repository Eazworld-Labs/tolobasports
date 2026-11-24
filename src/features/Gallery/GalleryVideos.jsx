import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import Container from '../../ui/Container'
import SectionHead from '../../ui/SectionHead'
import VideoClip from '../../ui/VideoClip'
import { VIDEO_ORDER } from '../../ui/videos'

const Wrap = styled.section`
  padding-block: var(--space-10);
  background-color: var(--color-paper);
  border-top: 1px solid var(--color-line);
`

// The landscape reel spans the row; the portrait clips sit four across.
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-8) var(--space-5);
  align-items: start;

  & > :first-child {
    grid-column: 1 / -1;
    max-width: 96rem;
  }

  @media ${devicesMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${devicesMax.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`

function GalleryVideos() {
  return (
    <Wrap aria-labelledby="videos-title">
      <Container>
        <SectionHead
          id="videos-title"
          title="Videos"
          intro="Press play to load a video; nothing downloads until then."
        />
        <Grid>
          {VIDEO_ORDER.map((key) => (
            <VideoClip key={key} video={key} />
          ))}
        </Grid>
      </Container>
    </Wrap>
  )
}

export default GalleryVideos
