import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateMedia, filterByTenantRead } from './access/byTenant'

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
        read: filterByTenantRead,
        update: canMutateMedia,
    },
    upload: {
        staticDir: path.resolve(dirname, '../../public/media'),
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
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            localized: true,
        },
        tenantField,
    ],
} 