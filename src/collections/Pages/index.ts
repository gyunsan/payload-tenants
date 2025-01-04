import type { CollectionConfig } from 'payload'

import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutatePage } from './access/byTenant'
import { readAccess } from './access/readAccess'
import { ensureUniqueSlug } from './hooks/ensureUniqueSlug'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { Code } from '../../blocks/Code/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: canMutatePage,
    delete: canMutatePage,
    read: readAccess,
    update: canMutatePage,
  },
  admin: {
    baseListFilter,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      defaultValue: 'home',
      hooks: {
        beforeValidate: [ensureUniqueSlug],
      },
      index: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Archive, CallToAction, Content, Code],
    },
    tenantField,
  ],
}
