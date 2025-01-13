import type { Where } from 'payload'
import { parseCookies } from 'payload'

export const baseListFilter = ({ req }): Where => {
    const cookies = parseCookies(req.headers)
    const selectedTenant = cookies.get('payload-tenant')

    if (selectedTenant) {
        return {
            tenant: {
                equals: selectedTenant,
            },
        }
    }

    return {}
} 