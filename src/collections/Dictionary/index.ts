import type { CollectionConfig } from 'payload'
const Dictionary: CollectionConfig = {
    slug: 'dictionary',
    admin: {
        useAsTitle: 'word',
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
    ],
};

export default Dictionary;
