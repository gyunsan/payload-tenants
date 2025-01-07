import { Suspense } from 'react'
import SlugPage, { Props } from './[...slug]/page'

const Page = async (props: Props) => (
    <Suspense fallback={<div>Loading...</div>}>
        <SlugPage {...props} />
    </Suspense>
)

export default Page
