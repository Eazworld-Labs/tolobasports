import CtaBand from '../ui/CtaBand'
import Hero from '../features/home/Hero'
import FieldBento from '../features/home/FieldBento'
import { Paths, Services, Steps } from '../features/home/HomeSections'
import NewsArticle from '../features/home/NewsArticle'

function HomePage() {
  return (
    <>
      <Hero />
      <Paths />
      <Services />
      <Steps />
      <FieldBento />
      <NewsArticle />
      <CtaBand
        id="home-book"
        heading="Book a consultation"
        paragraphs={[
          'Tell us what you need and when suits you. We reply by email to confirm a time.',
        ]}
        cta={{ label: 'Request a consultation', to: '/contact' }}
      />
    </>
  )
}

export default HomePage
