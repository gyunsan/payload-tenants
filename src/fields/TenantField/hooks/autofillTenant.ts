import type { FieldHook } from 'payload'
import { parseCookies } from 'payload'
import { getTenantAccessIDs } from '../../../utilities/getTenantAccessIDs'

export const autofillTenant: FieldHook = ({ req, value }) => {
  // If there is already a value, use it
  if (value) {
    return value
  }

  // Check for tenant cookie first
  const cookies = parseCookies(req.headers)
  const selectedTenant = cookies.get('payload-tenant')
  if (selectedTenant) {
    return selectedTenant
  }

  // If no cookie, and the user only has one tenant,
  // return that tenant ID as the value
  const tenantIDs = getTenantAccessIDs(req.user)
  if (tenantIDs.length === 1) {
    return tenantIDs[0]
  }

  // If we get here, we need a tenant selection but don't have one
  throw new Error('Please select a tenant before creating a post')
}
