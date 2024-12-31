import type { Page } from '../../../payload-types'

import React from 'react'

export const RenderPage = ({ data }: { data: Page }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200 dark:border-zinc-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Last updated {new Date(data.updatedAt).toLocaleDateString()}</p>
          </div>

          <div className="px-8 py-6">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-50 dark:bg-zinc-900 px-6 py-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Tenant ID</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{data.id}</dd>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-900 px-6 py-4 rounded-lg">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Slug</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{data.slug}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Additional Details</h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
