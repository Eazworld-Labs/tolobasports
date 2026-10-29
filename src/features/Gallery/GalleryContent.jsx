import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { images } from './gallery'
import { useState } from 'react'
import GalleryModel from './GalleryModel'

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;

  gap: 20px;

  @media ${devicesMax.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

const Img = styled(LazyLoadImage)`
  border: 2px solid var(--color-ink-700);
  width: 100%;
  height: 254px;
  cursor: pointer;

  transition: all 0.3s;
  &:hover {
    border: 5px solid var(--color-ink-700);
  }
`
function GalleryContent() {
  const [clickImage, setClickImage] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  function handleClick(image, index) {
    setCurrentIndex(index)
    setClickImage(image.src)
  }
  function handleRotationRight() {
    const totalLength = images.length

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0)
      const newUrl = images[0].src
      setClickImage(newUrl)
      return
    }
    const newIndex = currentIndex + 1

    const newUrl = images.filter((item) => {
      return images.indexOf(item === newIndex)
    })

    const newItem = newUrl[newIndex].src
    setClickImage(newItem)
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <Images>
        {images.map((image, index) => (
          <Img
            key={image.alt}
            src={image.src}
            loading="lazy"
            onClick={() => handleClick(image, index)}
          />
        ))}
      </Images>
      {clickImage && (
        <GalleryModel
          clickImage={clickImage}
          handleRotationRight={handleRotationRight}
          setClickImage={setClickImage}
        />
      )}
    </>
  )
}

export default GalleryContent
