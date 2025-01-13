import type { Access } from 'payload'

import { filterByTenantRead } from './byTenant'

export const readAccess: Access = async (args) => {
    const { req } = args

    if (!req.user) {
        return false
    }

    // If this is a create operation's read check, allow it
    if (req.method === 'POST') {
        return true
    }

    return filterByTenantRead(args)
} 