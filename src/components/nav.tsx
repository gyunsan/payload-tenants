import { Avatar } from '@/components/catalyst/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/catalyst/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/catalyst/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/catalyst/sidebar'
import { StackedLayout } from '@/components/catalyst/stacked-layout'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ThemeSwitcher } from './theme-switcher'

const navItems = [
    { label: 'Home', url: '/' },
    { label: 'Explore APIs', url: '/apis' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Docs', url: '/docs' },
    { label: 'About', url: '/about' },
]
export function Nav({ children }: { children: React.ReactNode }) {
    return (
        <StackedLayout
            navbar={
                <Navbar>
                    <div className="text-2xl font-mono text-yellow-500">sAPI</div>
                    <NavbarDivider className="max-lg:hidden" />
                    <NavbarSection className="max-lg:hidden">
                        {navItems.map(({ label, url }) => (
                            <NavbarItem key={label} href={url}>
                                {label}
                            </NavbarItem>
                        ))}
                    </NavbarSection>
                    <NavbarSpacer />
                    <NavbarSection>
                        <NavbarItem href="/apis" aria-label="Explore APIs">
                            <MagnifyingGlassIcon />
                        </NavbarItem>
                        <ThemeSwitcher />
                        <NavbarItem href="/admin" aria-label="Admin">
                            <WrenchScrewdriverIcon />
                        </NavbarItem>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarBody>
                        <SidebarSection>
                            {navItems.map(({ label, url }) => (
                                <SidebarItem key={label} href={url}>
                                    {label}
                                </SidebarItem>
                            ))}
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
            }
        >
            {children}
        </StackedLayout>
    )
}