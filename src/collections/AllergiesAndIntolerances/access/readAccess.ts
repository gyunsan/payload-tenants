import type { Access, Where } from 'payload'

import { parseCookies } from 'payload'

import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { getTenantAccessIDs } from '../../../utilities/getTenantAccessIDs'
import { extractID } from '../../../utilities/extractID'

export const readAccess: Access = (args) => {
    const req = args.req
    const cookies = parseCookies(req.headers)
    const superAdmin = isSuperAdmin(args)
    const selectedTenant = cookies.get('payload-tenant')
    const tenantAccessIDs = getTenantAccessIDs(req.user)

    const publicDictionaryConstraint: Where = {
        'tenant.public': {
            equals: true,
        },
    }

    // If it's a super admin or has access to the selected tenant
    if (selectedTenant && (superAdmin || tenantAccessIDs.some((id) => String(extractID(id)) === selectedTenant))) {
        // filter access by selected tenant
        return {
            or: [
                publicDictionaryConstraint,
                {
                    tenant: {
                        equals: selectedTenant,
                    },
                },
            ],
        }
    }

    // If no manually selected tenant,
    // but it is a super admin, give access to all
    if (superAdmin) {
        return true
    }

    // If not super admin,
    // but has access to tenants,
    // give access to only their own tenants
    if (tenantAccessIDs.length) {
        return {
            or: [
                publicDictionaryConstraint,
                {
                    tenant: {
                        in: tenantAccessIDs,
                    },
                },
            ],
        }
    }

    // Allow access to public dictionary entries
    return publicDictionaryConstraint
} 