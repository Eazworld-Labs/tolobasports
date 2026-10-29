import styled from 'styled-components'

const StyleVideoRes = styled.div`
  width: 100%;
  height: 100%;
`

const YoutubeEmbed = ({ embedId, title = 'Embedded youtube' }) => (
  <StyleVideoRes>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      loading="lazy"
    />
  </StyleVideoRes>
)

export default YoutubeEmbed
