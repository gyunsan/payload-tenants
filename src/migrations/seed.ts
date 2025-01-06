import type { MigrateUpArgs } from '@payloadcms/db-postgres'

export const up = async ({ payload }: MigrateUpArgs): Promise<void> => {
  if (process.env.NODE_ENV === 'production') return

  await payload.create({
    collection: 'users',
    data: {
      email: 'demo@payloadcms.com',
      password: 'demo',
      roles: ['super-admin'],
      name: 'Demo User',
    },
  })
}

export const down = async ({ payload }: MigrateUpArgs): Promise<void> => {
  // Add cleanup logic here if needed
  if (process.env.NODE_ENV === 'production') return

  await payload.delete({
    collection: 'users',
    where: {
      email: {
        equals: 'demo@payloadcms.com'
      }
    }
  })
}
