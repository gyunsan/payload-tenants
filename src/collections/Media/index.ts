import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateMedia } from './access/byTenant'
import { readAccess } from './access/readAccess'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename',
        baseListFilter,
    },
    access: {
        create: canMutateMedia,
        delete: canMutateMedia,
        read: readAccess,
        update: canMutateMedia,
    },
    upload: {
        staticDir: path.resolve(dirname, '../../../public/media'),
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
    },
    timestamps: true,
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'caption',
            type: 'richText',
            localized: true,
        },
        tenantField,
    ],
}

export default Media 