import type { CollectionConfig } from 'payload'
import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateDictionary } from './access/byTenant'
import { readAccess } from './access/readAccess'
import { slugField } from '@/fields/slug'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  AlignFeature,
  IndentFeature,
  LinkFeature,
  UnorderedListFeature,
  OrderedListFeature,
  ParagraphFeature,
  UploadFeature,
  InlineCodeFeature,
} from '@payloadcms/richtext-lexical'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

const AllergiesAndIntolerances: CollectionConfig = {
  slug: 'allergies-and-intolerances',
  admin: {
    useAsTitle: 'name',
    baseListFilter,
    listSearchableFields: ['name'],
    defaultColumns: ['name', 'isCommon', 'createdAt', 'updatedAt'],
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'allergies-and-intolerances',
        req,
      }),
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'allergies-and-intolerances',
          req,
        })
        return path
      },
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'The name of the allergy or intolerance',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                    StrikethroughFeature(),
                    SubscriptFeature(),
                    SuperscriptFeature(),
                    AlignFeature(),
                    IndentFeature(),
                    LinkFeature({
                      enabledCollections: ['pages', 'posts', 'media'],
                    }),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    ParagraphFeature(),
                    UploadFeature({
                      collections: {
                        media: {
                          fields: [
                            {
                              name: 'caption',
                              type: 'richText',
                            },
                          ],
                        },
                      },
                    }),
                    InlineCodeFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Whether this item is published',
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
        description: 'Authors of this content',
      },
      hasMany: true,
      relationTo: 'users',
      defaultValue: ({ user }) => user ? [user.id] : undefined,
      required: true,
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
      admin: {
        position: 'sidebar',
        description: 'Tags to help categorize and search',
      },
    },
    {
      name: 'isCommon',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether this is a common allergy or intolerance',
        position: 'sidebar',
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
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField('name'),
    tenantField,
  ],
  timestamps: true,
  versions: {
    drafts: {
      autosave: {
        interval: 2000,
      },
    },
  },
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  access: {
    create: canMutateDictionary,
    delete: canMutateDictionary,
    read: readAccess,
    update: canMutateDictionary,
  },
};

export default AllergiesAndIntolerances;
