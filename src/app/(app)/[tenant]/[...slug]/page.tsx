import type { Where, User } from 'payload'
import { headers as getHeaders } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { RenderPage } from '../../../components/RenderPage'
import { unstable_cache } from 'next/cache'
import configPromise from '@payload-config'

// Cache the page data for 1 minute
const getPageData = unstable_cache(
  async (tenant: string, slug: string | undefined, user: User) => {
    const payload = await getPayload({ config: configPromise })

    const slugConstraint: Where = slug
      ? {
        slug: {
          equals: slug,
        },
      }
      : {
        or: [
          {
            slug: {
              equals: '',
            },
          },
          {
            slug: {
              equals: 'home',
            },
          },
          {
            slug: {
              exists: false,
            },
          },
        ],
      }

    try {
      const pageQuery = await payload.find({
        collection: 'pages',
        overrideAccess: false,
        user,
        where: {
          and: [
            {
              'tenant.slug': {
                equals: tenant,
              },
            },
            slugConstraint,
          ],
        },
        depth: 1,
        limit: 1,
      })

      return pageQuery.docs[0]
    } catch (error) {
      console.error('Error fetching page data:', error)
      return null
    }
  },
  ['page-data'],
  { revalidate: 60 } // Cache for 60 seconds
)

export type Props = {
  params: Promise<{ slug?: string[]; tenant: string }>
}

export default async function Page({
  params,
}: Props) {
  try {
    const headers = await getHeaders()
    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers })

    const { tenant, slug } = await params

    // Check tenant access with minimal query
    const tenantExists = await payload.find({
      collection: 'tenants',
      overrideAccess: false,
      user,
      where: {
        slug: {
          equals: tenant,
        },
      },
      depth: 0,
      limit: 1,
    })

    if (tenantExists.totalDocs === 0) {
      return redirect(
        `/${tenant}/login?redirect=${encodeURIComponent(
          `/${tenant}${slug ? `/${slug.join('/')}` : ''}`,
        )}`,
      )
    }

    // Get cached page data
    const pageData = await getPageData(
      tenant,
      slug?.join('/'),
      user as User
    )

    if (!pageData) {
      return notFound()
    }

    return <RenderPage data={pageData} />
  } catch (error) {
    console.error('Error in page render:', error)
    return notFound()
  }
}