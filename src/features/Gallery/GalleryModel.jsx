/* eslint react/prop-types: 0*/

import { HiOutlinePlay, HiOutlineXMark } from 'react-icons/hi2'
import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-backdrop);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-modal);

  display: flex;
  justify-content: center;
  align-items: center;
  .something {
    z-index: 500000;
  }
`
const Img = styled.img`
  width: 50%;
  height: 70%;

  @media ${devicesMax.sm} {
    width: 80%;
  }
`
const RighContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20rem;
  transform: transale(0, -50%);
  background-color: var(--color-signal);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  box-shadow: var(--shadow-sm);

  @media ${devicesMax.lg} {
    right: 10rem;
  }
  @media ${devicesMax.md} {
    right: 5rem;
  }
  @media ${devicesMax.sm} {
    right: 1rem;
  }
`
const StyledIconRight = styled(HiOutlinePlay)`
  font-size: 40px;
  cursor: pointer;
  z-index: 7000000;
  color: var(--color-white);
`
const StyledIconCross = styled(HiOutlineXMark)`
  font-size: 20px;
  cursor: pointer;
  color: var(--color-white);

  z-index: 7000000;
  .something {
    z-index: 500000;
  }
`
const StyledSpan = styled.span`
  cursor: pointer;
  position: absolute;
  padding: 0.5rem;
  right: 100px;
  top: 100px;
  background-color: var(--color-signal);
  z-index: 50000000;
  box-shadow: var(--shadow-sm);

  display: flex;
  justify-content: center;
  align-items: center;
  .something {
    z-index: 500000;
  }

  @media ${devicesMax.sm} {
    right: 50px;
  }
`

function GalleryModel({ clickImage, handleRotationRight, setClickImage }) {
  function handleClick(e) {
    if (e.target.classList.contains('something')) {
      setClickImage(false)
    }
  }
  return (
    <>
      <Overlay className="something" onClick={handleClick}>
        <Img src={clickImage} alt="trigger picture" />
        <StyledSpan className="something">
          <StyledIconCross className="something" />
        </StyledSpan>
        <RighContainer onClick={handleRotationRight}>
          <StyledIconRight />
        </RighContainer>
      </Overlay>
    </>
  )
}

export default GalleryModel
