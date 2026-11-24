import Header from '../ui/Header'
import Scout from '../features/scouting/Scout'
import { pageTitle } from '../features/scouting/scoutingCopy'

function Scouting() {
  return (
    <>
      <Header title={pageTitle} flush />
      <Scout />
    </>
  )
}

export default Scouting
