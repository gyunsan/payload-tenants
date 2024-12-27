import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers'
import Link from 'next/link'
import './tenant-card.scss'

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
                <h1 className="text-3xl font-bold">Your Tenants</h1>
                <Link href="/admin" className="admin-link">
                    Admin Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </Link>
            </div>
            <div className='tenant-grid'>
                {tenants.map((tenant) => (
                    <Link
                        key={tenant.id}
                        href={`/${tenant.slug}`}
                        className="card-body"
                    >
                        <span className="text-xl font-semibold">{tenant.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

