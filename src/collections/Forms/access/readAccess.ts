import type { Access } from 'payload'

import { isSuperAdmin } from '@/access/isSuperAdmin'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'

export const readAccess: Access = (args) => {
    const { req } = args

    if (isSuperAdmin(args)) {
        return true
    }

    const tenantAccessIDs = getTenantAccessIDs(req.user)

    if (tenantAccessIDs.length > 0) {
        return {
            tenant: {
                in: tenantAccessIDs,
            },
        }
    }

    return false
} 