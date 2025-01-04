import type { FieldHook, Where } from 'payload'
import { extractID } from '../../../utilities/extractID'

const formatSlug = (value: string): string => {
    if (!value) return ''
    return value
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
}

export const ensureUniqueSlug: FieldHook = async ({ value, data, operation, req }) => {
    if (!value && operation === 'update') return undefined

    const valueToUse = value || (data?.title ? formatSlug(data.title as string) : '')
    if (!valueToUse) return ''

    let slug = formatSlug(valueToUse)
    const whereConditions: Where[] = [{ slug: { equals: slug } }]

    if (data?.tenant) {
        whereConditions.push({ tenant: { equals: extractID(data.tenant) } })
    }

    if (operation === 'update' && data?.id) {
        whereConditions.push({ id: { not_equals: data.id } })
    }

    const existingDocs = await req.payload.find({
        collection: 'categories',
        where: { and: whereConditions },
    })

    if (existingDocs.totalDocs === 0) return slug

    let count = 1
    let newSlug = `${slug}-${count}`

    while (count < 100) {
        whereConditions[0] = { slug: { equals: newSlug } }
        const docsWithNewSlug = await req.payload.find({
            collection: 'categories',
            where: { and: whereConditions },
        })

        if (docsWithNewSlug.totalDocs === 0) return newSlug
        count++
        newSlug = `${slug}-${count}`
    }

    return slug
} 