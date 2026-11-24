import GalleryContent from '../features/Gallery/GalleryContent'
import GalleryVideos from '../features/Gallery/GalleryVideos'
import Header from '../ui/Header'

function Gallery() {
  return (
    <>
      <Header
        title="Gallery"
        intro="Photos and videos from our scouting, partnerships, events and athletes."
        flush
      />
      <GalleryContent />
      <GalleryVideos />
    </>
  )
}

export default Gallery
