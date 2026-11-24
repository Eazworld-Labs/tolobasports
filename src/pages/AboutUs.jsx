import AboutDetail from '../features/aboutus/AboutDetail'
import Header from '../ui/Header'
import { pageTitle } from '../features/aboutus/aboutContent'

function AboutUs() {
  return (
    <>
      <Header title={pageTitle} flush />
      <AboutDetail />
    </>
  )
}

export default AboutUs
