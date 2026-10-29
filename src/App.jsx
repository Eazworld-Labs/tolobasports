import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/HomePage'
import AppLayout from './ui/AppLayout'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Scouting from './pages/Scouting'
import Consult from './pages/Consult'
import Gallery from './pages/Gallery'
import Faq from './pages/Faq'
import Mentoring from './pages/Mentoring'
import Testimonial from './pages/Testimonial'
import Partners from './pages/Partners'
import Blog from './pages/Blog'
import Programmes from './pages/Programmes'
import Trainer from './pages/Trainer'
import BlogContent from './features/blog/BlogContent'
import ScrollToTop from './ui/ScrollToTop'
import RouteMeta from './ui/RouteMeta'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <RouteMeta />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="scouting" element={<Scouting />} />
            <Route path="consult" element={<Consult />} />
            <Route path="faq" element={<Faq />} />
            <Route path="mentoring" element={<Mentoring />} />
            <Route path="partners" element={<Partners />} />
            <Route path="blog" element={<Blog />} />
            <Route
              path="blog/APivotalMeetinginAbuDhabi"
              element={<BlogContent />}
            />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="image-gallery" element={<Gallery />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="trainer" element={<Trainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
