import type { Page } from '@payload-types'

import React from 'react'

export const RenderPage = ({ data }: { data: Page }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Tenant Data</h2>
        <div className="bg-gray-50 p-4 rounded-md overflow-auto">
          <pre className="whitespace-pre-wrap">
            <p>Title: {data.title}</p>
            <p>Slug: {data.slug}</p>
            <p>ID: {data.id}</p>
            <p>Updated At: {data.updatedAt}</p>
          </pre>
        </div>
      </div>
    </div>
  )
}
