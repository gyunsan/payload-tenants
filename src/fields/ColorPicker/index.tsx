'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'

export const ColorPickerField: React.FC<{ path: string }> = ({ path }) => {
    const { value, setValue } = useField({ path })

    return (
        <input
            type="color"
            value={(value as string) || '#000000'}
            onChange={e => setValue(e.target.value)}
        />
    )
} 