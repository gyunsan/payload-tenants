import type { CollectionConfig } from 'payload'
import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateAnimal } from './access/byTenant'
import { readAccess } from './access/readAccess'

const Animals: CollectionConfig = {
    slug: 'animals',
    admin: {
        useAsTitle: 'species',
        baseListFilter,
        listSearchableFields: ['species', 'breed', 'description'],
        defaultColumns: ['species', 'breed', 'published'],
    },
    access: {
        create: canMutateAnimal,
        delete: canMutateAnimal,
        read: readAccess,
        update: canMutateAnimal,
    },
    timestamps: true,
    fields: [
        {
            name: 'species',
            type: 'text',
            required: true,
            admin: {
                description: 'The species of the animal (e.g., Dog, Cat, Bird)',
            },
        },
        {
            name: 'breed',
            type: 'text',
            required: false,
            admin: {
                description: 'The breed of the animal if applicable (e.g., Golden Retriever, Persian)',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
            admin: {
                description: 'A description of the animal',
            },
        },
        {
            name: 'published',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                description: 'Whether this animal entry is published',
                position: 'sidebar',
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Animal Images',
            minRows: 0,
            maxRows: 10,
            labels: {
                singular: 'Image',
                plural: 'Images',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'caption',
                    type: 'text',
                    label: 'Image Caption',
                }
            ],
            admin: {
                description: 'Upload images of the animal',
            },
        },
        tenantField,
    ],
}

export default Animals
