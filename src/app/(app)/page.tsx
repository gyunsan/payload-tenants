import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'
import Link from 'next/link'

export default async function Home() {
    const payload = await getPayload({ config: configPromise })
    const headers = await getHeaders()
    const { user } = await payload.auth({ headers })

    const tenantsQuery = await payload.find({
        collection: 'tenants',
        overrideAccess: false,
        user,
    })

    const tenants = tenantsQuery.docs

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-red-500">Your Tenants</h1>
                <Link
                    href="/admin"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-card text-card-foreground hover:bg-muted transition-colors"
                >
                    Admin Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tenants.map((tenant) => (
                    <Link
                        key={tenant.id}
                        href={`/${tenant.slug}`}
                        className="p-6 rounded-lg bg-card hover:bg-muted transition-colors flex items-center justify-between"
                    >
                        <span className="text-xl font-semibold text-card-foreground">{tenant.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

