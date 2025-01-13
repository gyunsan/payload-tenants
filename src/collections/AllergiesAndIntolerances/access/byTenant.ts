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

    if (selectedTenant) {
        if (superAdmin) {
            return {
                tenant: {
                    equals: selectedTenant,
                },
            }
        }

        const hasTenantAccess = tenantAccessIDs.some((id) => String(extractID(id)) === selectedTenant)

        if (hasTenantAccess) {
            return {
                tenant: {
                    equals: selectedTenant,
                },
            }
        }
    }

    if (superAdmin) {
        return true
    }

    if (tenantAccessIDs.length) {
        return {
            tenant: {
                in: tenantAccessIDs,
            },
        }
    }

    return false
}

export const canMutateAllergiesAndIntolerances: Access = (args) => {
    const req = args.req
    const superAdmin = isSuperAdmin(args)

    if (!req.user) {
        return false
    }

    if (superAdmin) {
        return true
    }

    const cookies = parseCookies(req.headers)
    const selectedTenant = cookies.get('payload-tenant')

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