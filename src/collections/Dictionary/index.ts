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
            localized: true,
            admin: {
                description: 'The actual word or term',
            },
        },
        {
            name: 'partOfSpeech',
            type: 'select',
            required: true,
            localized: true,
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
                { label: 'Съществително име', value: 'съществително' },
                { label: 'Глагол', value: 'глагол' },
                { label: 'Глагол/Съществително', value: 'глагол/съществително' },
                { label: 'Прилагателно', value: 'прилагателно' },
                { label: 'Наречие', value: 'наречие' },
                { label: 'Местоимение', value: 'местоимение' },
                { label: 'Предлог', value: 'предлог' },
                { label: 'Съюз', value: 'съюз' },
                { label: 'Междуметие', value: 'междуметие' }
            ],
            admin: {
                description: 'The part of speech this word belongs to',
            },
        },
        {
            name: 'definition',
            type: 'textarea',
            required: true,
            localized: true,
            admin: {
                description: 'A clear explanation of what the word means',
            },
        },
        {
            name: 'example',
            type: 'textarea',
            required: false,
            localized: true,
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
            localized: true,
            admin: {
                description: 'Whether this dictionary entry is published',
                position: 'sidebar',
            },
        },
        tenantField,
    ],
};

export default Dictionary;
