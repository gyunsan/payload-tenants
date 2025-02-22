import type { BaseListFilter } from 'payload'
import type { Tenant } from '@/payload-types'

import { isSuperAdmin } from '@/access/isSuperAdmin'
import { getTenantAccessIDs } from '@/utilities/getTenantAccessIDs'
import { extractID } from '@/utilities/extractID'
import { parseCookies } from 'payload'

export const baseListFilter: BaseListFilter = (args) => {
  const req = args.req
  const cookies = parseCookies(req.headers)
  const superAdmin = isSuperAdmin(args)
  const selectedTenant = cookies.get('payload-tenant')
  const tenantAccessIDs = getTenantAccessIDs(req.user)

  // if user is super admin or has access to the selected tenant
  if (selectedTenant && (superAdmin || tenantAccessIDs.some((id) => String(extractID(id)) === selectedTenant))) {
    // set a base filter for the list view
    return {
      tenant: {
        equals: selectedTenant,
      },
    }
  }

  // Access control will take it from here
  return null
}
