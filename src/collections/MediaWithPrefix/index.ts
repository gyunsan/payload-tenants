import { CollectionConfig } from 'payload'

export const MediaWithPrefix: CollectionConfig = {
  slug: 'media-with-prefix',
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
      },
    ],
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
