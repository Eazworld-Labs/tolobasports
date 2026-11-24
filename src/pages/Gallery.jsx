import GalleryContent from '../features/Gallery/GalleryContent'
import GalleryVideos from '../features/Gallery/GalleryVideos'
import PageHero from '../ui/kit/PageHero'

function Gallery() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        kicker="Gallery"
        title="Photos and"
        highlight="videos"
        lead="Moments from our scouting visits, partnerships, events and athletes."
      />
      <GalleryContent />
      <GalleryVideos />
    </>
  )
}

export default Gallery
