import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
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
