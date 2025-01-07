import { Badge } from '@/components/catalyst/badge'
import { Button } from '@/components/catalyst/button'
import { Divider } from '@/components/catalyst/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/catalyst/dropdown'
import { Heading } from '@/components/catalyst/heading'
import { Input, InputGroup } from '@/components/catalyst/input'
import { Link } from '@/components/catalyst/link'
import { Select } from '@/components/catalyst/select'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Events',
}

export default async function Tenants() {
  const payload = await getPayload({ config: configPromise })
  const tenantsQuery = await payload.find({
    collection: 'tenants',
    limit: 1000 // Increased limit to get all tenants
  })
  const tenants = tenantsQuery.docs

  const pageQuery = await payload.find({
    collection: 'pages',
    limit: 1000, // Increased limit to get all pages
    where: {
      tenant: {
        exists: true
      }
    }
  })
  const pages = pageQuery.docs

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Tenants</Heading>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Manage your tenants and their events.
          </div>
          <div className='text-tiny text-muted-foreground'>{tenants.length} results found</div>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon className="text-zinc-500 dark:text-zinc-400" />
                <Input
                  name="search"
                  placeholder="Search events&hellip;"
                  className="placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                />
              </InputGroup>
            </div>
            <div>
              <Select
                name="sort_by"
                className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
              >
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Button>Create event</Button>
      </div>
      <ul className="mt-10">
        {tenants.map((tenant, index) => (
          <>
            <li key={tenant.id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={tenant.id} className="flex gap-6 py-6">
                  <div className="w-32 shrink-0">
                    <Link href={`/${tenant.slug}/${pages.find(page => {
                      const pageTenant = page.tenant
                      return typeof pageTenant === 'number' ? pageTenant === tenant.id : pageTenant?.id === tenant.id
                    })?.slug || ''}`} aria-hidden="true">
                      <Image
                        width={128}
                        height={128}
                        className="aspect-[3/2] rounded-lg shadow ring-1 ring-zinc-900/5 dark:ring-white/10"
                        src={`/teams/${tenant.slug}.svg`}
                        alt={tenant.name}
                      />
                    </Link>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold text-zinc-900 dark:text-zinc-100">
                      <Link href={`/${tenant.slug}`}>{tenant.name}</Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500 dark:text-zinc-400">
                      {tenant.createdAt} <span aria-hidden="true">·</span> {tenant.slug}
                    </div>
                    <div className="text-xs/6 text-zinc-600 dark:text-zinc-300">
                      Active tenant
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    className="max-sm:hidden"
                    color={tenant.public ? 'lime' : 'zinc'}
                  >
                    {tenant.public ? 'Public' : 'Private'}
                  </Badge>
                  <Dropdown>
                    <DropdownButton
                      plain
                      aria-label="More options"
                      className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem href={`/${tenant.slug}`}>View</DropdownItem>
                      <DropdownItem href={`/admin/collections/pages/${pages.find(page => {
                        const pageTenant = page.tenant
                        return typeof pageTenant === 'number' ? pageTenant === tenant.id : pageTenant?.id === tenant.id
                      })?.id}`}>Edit</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
