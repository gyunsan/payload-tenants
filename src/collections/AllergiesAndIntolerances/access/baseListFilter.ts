import type { BaseListFilter } from 'payload'

export const baseListFilter: BaseListFilter = () => ({
    deletedAt: {
        exists: false,
    },
}) 