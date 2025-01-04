import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
    slug: 'redirects',
    admin: {
        useAsTitle: 'from',
    },
    fields: [
        {
            name: 'from',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'to',
            type: 'group',
            fields: [
                {
                    name: 'type',
                    type: 'radio',
                    options: [
                        {
                            label: 'Custom URL',
                            value: 'custom',
                        },
                        {
                            label: 'Reference',
                            value: 'reference',
                        },
                    ],
                    defaultValue: 'custom',
                },
                {
                    name: 'url',
                    type: 'text',
                    admin: {
                        condition: (data) => data?.type === 'custom',
                    },
                },
                {
                    name: 'reference',
                    type: 'relationship',
                    relationTo: ['pages', 'posts'],
                    admin: {
                        condition: (data) => data?.type === 'reference',
                    },
                },
            ],
        },
    ],
} 