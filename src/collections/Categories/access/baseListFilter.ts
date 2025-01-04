import type { BaseListFilter } from 'payload'
import { parseCookies } from 'payload'

import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { getTenantAccessIDs } from '../../../utilities/getTenantAccessIDs'

export const baseListFilter: BaseListFilter = ({ req }) => {
    const cookies = parseCookies(req.headers)
    const selectedTenant = cookies.get('payload-tenant')
    const tenantAccessIDs = getTenantAccessIDs(req.user)
    const superAdmin = isSuperAdmin({ req })

    // If a tenant is selected, filter by that tenant
    if (selectedTenant) {
        return {
            and: [
                {
                    tenant: {
                        equals: selectedTenant,
                    },
                },
            ],
        }
    }

    // If super admin, show all
    if (superAdmin) {
        return null
    }

    // Otherwise, filter by tenants user has access to
    return {
        and: [
            {
                tenant: {
                    in: tenantAccessIDs,
                },
            },
        ],
    }
} 