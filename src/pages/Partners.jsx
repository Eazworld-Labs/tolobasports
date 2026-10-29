import PartContent from '../features/partners/PartContent'
import Header from '../ui/Header'
import { breadcrumb, pageTitle } from '../features/partners/partnersCopy'

function Partners() {
  return (
    <>
      <Header images="part" title={pageTitle} crumb={breadcrumb} flush />
      <PartContent />
    </>
  )
}

export default Partners
