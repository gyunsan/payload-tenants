import type { Access } from 'payload'

import { parseCookies } from 'payload'

import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { getTenantAccessIDs } from '../../../utilities/getTenantAccessIDs'
import { extractID } from '../../../utilities/extractID'

export const filterByTenantRead: Access = (args) => {
    const req = args.req
    const cookies = parseCookies(req.headers)
    const superAdmin = isSuperAdmin(args)
    const selectedTenant = cookies.get('payload-tenant')
    const tenantAccessIDs = getTenantAccessIDs(req.user)

    // First check for manually selected tenant from cookies
    if (selectedTenant) {
        // If it's a super admin,
        // give them read access to only dictionary entries for that tenant
        if (superAdmin) {
            return {
                tenant: {
                    equals: selectedTenant,
                },
            }
        }

        const hasTenantAccess = tenantAccessIDs.some((id) => String(extractID(id)) === selectedTenant)

        // If NOT super admin,
        // give them access only if they have access to tenant ID set in cookie
        if (hasTenantAccess) {
            return {
                tenant: {
                    equals: selectedTenant,
                },
            }
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
            tenant: {
                in: tenantAccessIDs,
            },
        }
    }

    // Deny access to all others
    return false
}

export const canMutateDictionary: Access = (args) => {
    const req = args.req
    const superAdmin = isSuperAdmin(args)

    if (!req.user) {
        return false
    }

    // super admins can mutate dictionary entries for any tenant
    if (superAdmin) {
        return true
    }

    const cookies = parseCookies(req.headers)
    const selectedTenant = cookies.get('payload-tenant')

    // tenant admins can add/delete/update
    // dictionary entries they have access to
    return (
        req.user?.tenants?.reduce((hasAccess: boolean, accessRow) => {
            if (hasAccess) {
                return true
            }
            if (
                accessRow &&
                accessRow.tenant &&
                String(extractID(accessRow.tenant)) === selectedTenant &&
                accessRow.roles?.includes('tenant-admin')
            ) {
                return true
            }
            return hasAccess
        }, false) || false
    )
} 