import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'trainer',
    title: 'Trainers',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram Handle',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'education',
            title: 'Education & Certifications',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'specialization',
            title: 'Specialization',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'interests',
            title: 'Interests',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'contact',
            title: 'Additional Contact Info',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});