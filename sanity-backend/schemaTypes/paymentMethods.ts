import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'paymentMethods',
    title: 'Způsoby platby',
    type: 'document',
    fields: [
        defineField({
            name: 'methods',
            title: 'Způsoby platby',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});