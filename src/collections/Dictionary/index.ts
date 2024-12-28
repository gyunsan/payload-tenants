import type { CollectionConfig } from 'payload'
import { tenantField } from '../../fields/TenantField'
import { baseListFilter } from './access/baseListFilter'
import { canMutateDictionary } from './access/byTenant'
import { readAccess } from './access/readAccess'

const Dictionary: CollectionConfig = {
    slug: 'dictionary',
    admin: {
        useAsTitle: 'word',
        baseListFilter,
        listSearchableFields: ['word', 'definition'],
        defaultColumns: ['word', 'partOfSpeech', 'published'],
    },
    access: {
        create: canMutateDictionary,
        delete: canMutateDictionary,
        read: readAccess,
        update: canMutateDictionary,
    },
    fields: [
        {
            name: 'word',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'The actual word or term',
            },
        },
        {
            name: 'partOfSpeech',
            type: 'select',
            required: true,
            options: [
                { label: 'Noun', value: 'noun' },
                { label: 'Verb', value: 'verb' },
                { label: 'Verb/Noun', value: 'verb/noun' },
                { label: 'Adjective', value: 'adjective' },
                { label: 'Adverb', value: 'adverb' },
                { label: 'Pronoun', value: 'pronoun' },
                { label: 'Preposition', value: 'preposition' },
                { label: 'Conjunction', value: 'conjunction' },
                { label: 'Interjection', value: 'interjection' },
            ],
            admin: {
                description: 'The part of speech this word belongs to',
            },
        },
        {
            name: 'definition',
            type: 'textarea',
            required: true,
            admin: {
                description: 'A clear explanation of what the word means',
            },
        },
        {
            name: 'example',
            type: 'textarea',
            required: false,
            admin: {
                description: 'An example sentence showing how to use this word',
            },
        },
        {
            name: 'pronunciation',
            type: 'text',
            required: false,
            admin: {
                description: 'Phonetic spelling for pronunciation guidance',
            },
        },
        {
            name: 'published',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                description: 'Whether this dictionary entry is published',
                position: 'sidebar',
            },
        },
        tenantField,
    ],
};

export default Dictionary;
