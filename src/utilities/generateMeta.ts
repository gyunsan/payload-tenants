import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const tabletUrl = image.sizes?.tablet?.url

    url = tabletUrl ? serverUrl + tabletUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post>
}): Promise<Metadata> => {
  const { doc } = args || {}

  // Type guard to check if doc has meta property
  const hasMetaProperty = (doc: Partial<Page> | Partial<Post>): doc is Partial<Post> => {
    return 'meta' in doc && doc.meta !== undefined
  }

  const ogImage = hasMetaProperty(doc) && doc.meta ? getImageURL(doc.meta.image) : undefined

  const title = hasMetaProperty(doc) && doc.meta?.title
    ? doc.meta.title + ' | Payload Website Template'
    : 'Payload Website Template'

  return {
    description: hasMetaProperty(doc) && doc.meta ? doc.meta.description : undefined,
    openGraph: mergeOpenGraph({
      description: hasMetaProperty(doc) && doc.meta ? doc.meta.description || '' : '',
      images: ogImage
        ? [
          {
            url: ogImage,
          },
        ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
