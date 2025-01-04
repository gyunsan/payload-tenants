import type { CollectionConfig } from 'payload'

import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateCategory, filterByTenantRead } from './access/byTenant'
import { ensureUniqueSlug } from './hooks'

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
        baseListFilter,
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    access: {
        create: canMutateCategory,
        delete: canMutateCategory,
        read: filterByTenantRead,
        update: canMutateCategory,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [ensureUniqueSlug],
            },
            index: true,
            localized: true,
            unique: true,
        },
        tenantField,
    ],
} 