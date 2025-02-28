import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'paymentMethods',
    title: 'Payment Methods',
    type: 'document',
    fields: [
        defineField({
            name: 'methods',
            title: 'Payment Methods List',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});