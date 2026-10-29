/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StyledImg = styled(LazyLoadImage)`
  height: 100%;
  width: 100%;
`

function Img({ src, alt }) {
  return <StyledImg src={src} alt={alt} />
}

export default Img
