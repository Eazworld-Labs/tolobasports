import GalleryContent from '../features/Gallery/GalleryContent'
import Header from '../ui/Header'

function Gallery() {
  return (
    <>
      <Header images="mentor" title="Images Gallery" crumb="Gallery" flush />
      <GalleryContent />
    </>
  )
}

export default Gallery
