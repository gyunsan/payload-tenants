import type { Access } from 'payload'
import { filterByTenantRead } from './byTenant'

export const readAccess: Access = (args) => {
    const { req } = args

    if (!req.user) {
        return false
    }

    return filterByTenantRead(args)
} 