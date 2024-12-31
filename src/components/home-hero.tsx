import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function HomeHero() {
    return (
        <div>
            <div className="relative isolate overflow-hidden">
                <div className="pb-24 pt-20 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="#" className="inline-flex space-x-6">
                                        <span className="rounded-full bg-yellow-600/10 px-3 py-1 text-sm/6 font-semibold text-yellow-600 ring-1 ring-inset ring-yellow-600/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20">
                                            Latest Release
                                        </span>
                                        <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-400">
                                            <span>New Payment API Available</span>
                                            <ChevronRightIcon className="size-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                                        </span>
                                    </a>
                                </div>
                                <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                                    APIs for Modern Applications
                                </h1>
                                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                                    Access powerful, reliable, and scalable APIs for payments, authentication, data processing, and more. Build faster with our developer-friendly solutions.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="/docs"
                                        className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-400"
                                    >
                                        Get Started
                                    </a>
                                    <a href="/pricing" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                                        View Pricing <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-orange-100 dark:bg-zinc-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        NotificationSetting.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                                </div>
                                            </div>
                                            <div className="px-6 pb-14 pt-6">
                                                <SyntaxHighlighter language="json" style={dracula}>
                                                    {JSON.stringify(
                                                        {
                                                            "id": 12,
                                                            "word": "Caramelize",
                                                            "partOfSpeech": "adjective",
                                                            "definition": "\nTo convert into caramel by cooking sugar.\n",
                                                            "example": "To convert into caramel by cooking sugar.",
                                                            "pronunciation": "Caramelize",
                                                            "published": false,
                                                            "tenant": {
                                                                "id": 2,
                                                                "name": "Cooksa",
                                                                "domains": [
                                                                    {
                                                                        "id": "676f0de93bdb4d34192c9ce8",
                                                                        "domain": "cooksa.com"
                                                                    }
                                                                ],
                                                                "slug": "cooksa",
                                                                "public": false,
                                                                "updatedAt": "2024-12-27T20:28:34.634Z",
                                                                "createdAt": "2024-12-26T15:44:57.235Z"
                                                            },
                                                            "updatedAt": "2024-12-28T17:32:45.457Z",
                                                            "createdAt": "2024-12-28T17:31:54.370Z"
                                                        },
                                                        null,
                                                        2
                                                    )}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
            </div>
        </div>
    )
}
