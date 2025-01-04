import type { CollectionConfig } from 'payload'
import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateForm } from './access/byTenant'
import { readAccess } from './access/readAccess'

export const Forms: CollectionConfig = {
    slug: 'forms',
    admin: {
        useAsTitle: 'title',
        baseListFilter,
    },
    access: {
        create: canMutateForm,
        delete: canMutateForm,
        read: readAccess,
        update: canMutateForm,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'fields',
            type: 'blocks',
            required: true,
            blocks: [
                {
                    slug: 'text',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'required',
                            type: 'checkbox',
                            defaultValue: false,
                        }
                    ]
                },
                {
                    slug: 'email',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'required',
                            type: 'checkbox',
                            defaultValue: false,
                        }
                    ]
                }
            ]
        },
        {
            name: 'submitButtonLabel',
            type: 'text',
            defaultValue: 'Submit',
            required: true,
        },
        {
            name: 'confirmationType',
            type: 'select',
            defaultValue: 'message',
            options: [
                {
                    label: 'Message',
                    value: 'message',
                },
                {
                    label: 'Redirect',
                    value: 'redirect',
                },
            ],
            required: true,
        },
        {
            name: 'confirmationMessage',
            type: 'richText',
            admin: {
                condition: (data) => data.confirmationType === 'message',
            },
        },
        {
            name: 'redirect',
            type: 'group',
            admin: {
                condition: (data) => data.confirmationType === 'redirect',
            },
            fields: [
                {
                    name: 'url',
                    type: 'text',
                    required: true,
                },
            ],
        },
        tenantField,
    ],
} 