import { formatPressDate } from './press'

// Turn a press story or a blog post into a row for NewsList.
export function pressItem(p) {
  const date = formatPressDate(p.date)
  return {
    key: p.id,
    tag: ['Press', p.source, date].filter(Boolean).join(' · '),
    title: p.headline,
    href: p.url,
    external: true,
    srLabel: `${p.source}, opens in a new tab`,
    photo: p.photo ? { photo: p.photo } : null,
    videoId: p.videoId,
    videoTitle: p.videoTitle,
  }
}

export function storyItem(post) {
  return {
    key: post.slug,
    tag: 'Story · Media & Blog',
    title: post.title,
    href: `/blog/${post.slug}`,
    external: false,
    photo: post.image,
  }
}
