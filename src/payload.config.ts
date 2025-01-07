import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Tenants } from './collections/Tenants'
import Users from './collections/Users'
import Dictionary from './collections/Dictionary'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Media } from './collections/Dictionary/Media'
import { Forms } from './collections/Forms'
import { Redirects } from './collections/Redirects'
import Pricing from './collections/Pricing'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


export default buildConfig({
  admin: {
    components: {
      afterNavLinks: ['@/components/TenantSelector#TenantSelectorRSC'],
    },
    user: 'users',
  },
  collections: [Pages, Users, Tenants, Dictionary, Posts, Categories, Media, Forms, Redirects, Pricing],
  globals: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI as string,
    },
    migrationDir: path.resolve(dirname, './migrations'),
  }),
  editor: lexicalEditor({}),
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: ['en', 'bg'],
    defaultLocale: 'en',
  },
})
