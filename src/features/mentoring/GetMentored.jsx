import styled from 'styled-components'
import GetDetail from './GetDetail'
import { devicesMax } from '../../styles/BreakPoint'

const StyledGet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 2rem;

  @media ${devicesMax.md} {
    grid-template-columns: 1fr;
  }
`

function GetMentored() {
  return (
    <StyledGet>
      <GetDetail />
    </StyledGet>
  )
}

export default GetMentored
