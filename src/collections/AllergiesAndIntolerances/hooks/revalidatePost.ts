import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { AllergiesAndIntolerance } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<AllergiesAndIntolerance> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/allergies/${doc.slug}`
      payload.logger.info(`Revalidating allergy at path: ${path}`)
      revalidatePath(path)
      revalidateTag('allergies-sitemap')
    }

    // If the allergy was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/allergies/${previousDoc.slug}`
      payload.logger.info(`Revalidating old allergy at path: ${oldPath}`)
      revalidatePath(oldPath)
      revalidateTag('allergies-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<AllergiesAndIntolerance> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/allergies/${doc?.slug}`
    revalidatePath(path)
    revalidateTag('allergies-sitemap')
  }
  return doc
}
