import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'priceTable',
    title: 'Price Table',
    type: 'document',
    fields: [
    defineField({
        name: 'title',
        title: 'Table Title',
        type: 'string',
    }),
    defineField({
        name: 'rows',
        title: 'Rows',
        type: 'array',
        of: [
        defineField({
            name: 'row',
            title: 'Row',
            type: 'object',
            fields: [
            defineField({
                name: 'type',
                title: 'Entry Type',
                type: 'string',
            }),
            defineField({
                name: 'allDay',
                title: 'All Day Price',
                type: 'string',
            }),
            defineField({
                name: 'workingHours',
                title: 'Working Hours Price',
                type: 'string',
            }),
            defineField({
                name: 'eveningWeekend',
                title: 'Evening & Weekend Price',
                type: 'string',
            }),
        ],
        }),
    ],
    }),
],
});

