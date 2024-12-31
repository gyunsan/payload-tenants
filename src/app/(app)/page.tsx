import { Avatar } from '@/components/catalyst/avatar'
import { Badge } from '@/components/catalyst/badge'
import { Divider } from '@/components/catalyst/divider'
import { Subheading } from '@/components/catalyst/heading'
import HomeHero from '@/components/home-hero'
import { Select } from '@/components/catalyst/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/catalyst/table'
import { getRecentOrders } from '@/data'

// Move Stat component to a separate file to fix Next.js Page export error
interface StatProps {
    title: string
    value: string
    change: string
}

const StatDisplay = ({ title, value, change }: StatProps) => {
    return (
        <div>
            <Divider />
            <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
            <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
            <div className="mt-3 text-sm/6 sm:text-xs/6">
                <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
                <span className="text-zinc-500">from last week</span>
            </div>
        </div>
    )
}

export default async function Home() {
    let orders = await getRecentOrders()

    return (
        <>
            <HomeHero />
            <div className="mt-8 flex items-end justify-between">
                <Subheading>Overview</Subheading>
                <div>
                    <Select name="period">
                        <option value="last_week">Last week</option>
                        <option value="last_two">Last two weeks</option>
                        <option value="last_month">Last month</option>
                        <option value="last_quarter">Last quarter</option>
                    </Select>
                </div>
            </div>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <StatDisplay title="Total revenue" value="$2.6M" change="+4.5%" />
                <StatDisplay title="Average order value" value="$455" change="-0.5%" />
                <StatDisplay title="Tickets sold" value="5,888" change="+4.5%" />
                <StatDisplay title="Pageviews" value="823,067" change="+21.2%" />
            </div>
            <Subheading className="mt-14">Recent orders</Subheading>
            <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
                <TableHead>
                    <TableRow>
                        <TableHeader>Order number</TableHeader>
                        <TableHeader>Purchase date</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Event</TableHeader>
                        <TableHeader className="text-right">Amount</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell className="text-zinc-500">{order.date}</TableCell>
                            <TableCell>{order.customer.name}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar src={order.event.thumbUrl} className="size-6" />
                                    <span>{order.event.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">US{order.amount.usd}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}


// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { headers as getHeaders } from 'next/headers'
// import Link from 'next/link'

// export default async function Home() {
//     const payload = await getPayload({ config: configPromise })
//     const headers = await getHeaders()
//     const { user } = await payload.auth({ headers })

//     const tenantsQuery = await payload.find({
//         collection: 'tenants',
//         overrideAccess: false,
//         user,
//     })

//     const tenants = tenantsQuery.docs

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-3xl font-bold text-red-500">Your Tenants</h1>
//                 <Link
//                     href="/admin"
//                     className="flex items-center gap-2 px-4 py-2 rounded-md bg-card text-card-foreground hover:bg-muted transition-colors"
//                 >
//                     Admin Dashboard
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M9 18l6-6-6-6" />
//                     </svg>
//                 </Link>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {tenants.map((tenant) => (
//                     <Link
//                         key={tenant.id}
//                         href={`/${tenant.slug}`}
//                         className="p-6 rounded-lg bg-card hover:bg-muted transition-colors flex items-center justify-between"
//                     >
//                         <span className="text-xl font-semibold text-card-foreground">{tenant.name}</span>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }
