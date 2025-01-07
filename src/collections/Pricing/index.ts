import { CollectionConfig } from 'payload';
import { baseListFilter } from './access/baseListFilter';
import { canMutateDictionary } from './access/byTenant';
import { readAccess } from './access/readAccess';

const Pricing: CollectionConfig = {
    slug: 'pricing',
    labels: {
        singular: 'Pricing Entry',
        plural: 'Pricing Entries',
    },
    admin: {
        useAsTitle: 'siteName',
        defaultColumns: ['siteName', 'updatedAt'],
        listSearchableFields: ['siteName'],
        group: 'Content',
        pagination: {
            defaultLimit: 10,
        },
        baseListFilter,
    },
    access: {
        read: readAccess,
        create: canMutateDictionary,
        update: canMutateDictionary,
        delete: canMutateDictionary,
    },
    hooks: {
        beforeChange: [
            ({ req, data }) => {
                if (req.user) {
                    return {
                        ...data,
                        updatedBy: req.user.id,
                    }
                }
                return data
            },
        ],
    },
    fields: [
        {
            name: 'tenant',
            type: 'relationship',
            relationTo: 'tenants',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'siteName',
            type: 'text',
            label: 'Site Name',
            required: true,
        },
        {
            name: 'siteDescription',
            type: 'textarea',
            label: 'Site Description',
        },
        {
            name: 'tiers',
            type: 'array',
            label: 'Tiers',
            fields: [
                {
                    name: 'key',
                    type: 'text',
                    label: 'Key',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Description',
                },
                {
                    name: 'price',
                    type: 'number',
                    label: 'Price',
                },
                {
                    name: 'discountPercentage',
                    type: 'number',
                    label: 'Discount Percentage',
                },
                {
                    name: 'isFeatured',
                    type: 'checkbox',
                    label: 'Is Featured',
                },
                {
                    name: 'isMostPopular',
                    type: 'checkbox',
                    label: 'Is Most Popular',
                },
                {
                    name: 'buttonText',
                    type: 'text',
                    label: 'Button Text',
                },
                {
                    name: 'buttonColor',
                    type: 'text',
                    label: 'Button Color',
                },
                {
                    name: 'buttonVariant',
                    type: 'text',
                    label: 'Button Variant',
                },
                {
                    name: 'features',
                    type: 'array',
                    label: 'Features',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            label: 'Feature Name',
                            required: true,
                        },
                        {
                            name: 'tooltip',
                            type: 'text',
                            label: 'Tooltip',
                        },
                    ],
                },
            ],
        },
        {
            name: 'addons',
            type: 'array',
            label: 'Addons',
            fields: [
                {
                    name: 'id',
                    type: 'text',
                    label: 'ID',
                    required: true,
                },
                {
                    name: 'name',
                    type: 'text',
                    label: 'Name',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Description',
                },
                {
                    name: 'price',
                    type: 'number',
                    label: 'Price',
                },
                {
                    name: 'timeInWeeks',
                    type: 'number',
                    label: 'Time in Weeks',
                },
            ],
        },
    ],
};

export default Pricing;