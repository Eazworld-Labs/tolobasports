import GalleryContent from '../features/Gallery/GalleryContent'
import Header from '../ui/Header'

function Gallery() {
  return (
    <>
      <Header
        title="Gallery"
        intro="Moments from our scouting, partnerships, events and athletes."
        flush
      />
      <GalleryContent />
    </>
  )
}

export default Gallery
