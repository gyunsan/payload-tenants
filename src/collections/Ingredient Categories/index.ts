import type { CollectionConfig } from 'payload'
import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateDictionary } from './access/byTenant'
import { readAccess } from './access/readAccess'
import { slugField } from '@/fields/slug'

const IngredientCategories: CollectionConfig = {
    slug: 'ingredient-categories',
    admin: {
        useAsTitle: 'name',
        baseListFilter,
        listSearchableFields: ['name', 'description', 'code', 'slug'],
        defaultColumns: ['name', 'code', 'published'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true,
            admin: {
                description: 'The name of the ingredient category',
            },
        },
        {
            name: 'code',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'Unique code identifier for the category',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
            localized: true,
            admin: {
                description: 'A description of what this category includes',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                description: 'Image representing this category',
            },
        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: 'ingredient-categories',
            hasMany: false,
            admin: {
                description: 'Parent category if this is a subcategory',
            },
        },
        {
            name: 'color',
            type: 'text',
            required: false,
            admin: {
                description: 'Color code for the category (e.g. #FF0000)',
                components: {
                    Field: '@/fields/ColorPicker#ColorPickerField',
                },
            },
        },
        {
            name: 'deletedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                readOnly: true,
                hidden: true,
            },
        },
        {
            name: 'published',
            type: 'checkbox',
            defaultValue: false,
            localized: true,
            admin: {
                description: 'Whether this category is published',
                position: 'sidebar',
            },
        },
        ...slugField('name'),
        tenantField,
    ],
    timestamps: true, // This adds createdAt and updatedAt fields automatically
    access: {
        create: canMutateDictionary,
        delete: canMutateDictionary,
        read: readAccess,
        update: canMutateDictionary,
    },
};

export default IngredientCategories;
