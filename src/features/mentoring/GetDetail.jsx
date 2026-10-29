/*eslint react/prop-types: 0*/
import styled from 'styled-components'
import { getOptions } from './getData'
import { devicesMax } from '../../styles/BreakPoint'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const DetailImgBox = styled.div`
  flex-basis: 40%;
`
const DetailImg = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
`
const StyledGetDetail = styled.div`
  padding: 2rem;
  border-radius: 7px;
  border: 1px solid var(--color-primary-0);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  display: flex;
  gap: 15px;

  @media ${devicesMax.dm} {
    flex-direction: column;
  }
`
const P = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
`
const Li = styled.li`
  list-style: circle;
  padding: 0 2rem;
  font-size: 1.2rem;
`
const TextDetail = styled.div`
  padding: 2rem;
`
const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
`

function GetDetail() {
  return (
    <>
      {getOptions.map((option) => {
        return (
          <StyledGetDetail key={option.index}>
            <DetailImgBox>
              <DetailImg src={option.image} alt="pc16" loading="lazy" />
            </DetailImgBox>

            <TextDetail>
              <H2> {option.heading}</H2>
              <P>{option.msg}</P>
              <ul>
                {option.acts.map((act) => {
                  return <Li key={act}>{act}</Li>
                })}
              </ul>
            </TextDetail>
          </StyledGetDetail>
        )
      })}
    </>
  )
}

export default GetDetail
