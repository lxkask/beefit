import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'priceTable',
    title: 'Ceník',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Název tabulky',
            type: 'string',
        }),
        defineField({
            name: 'rows',
            title: 'Ceny',
            type: 'array',
            of: [
                defineField({
                    name: 'row',
                    title: 'Cena',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'type',
                            title: 'Typ vstupu',
                            type: 'string',
                        }),
                        defineField({
                            name: 'allDay',
                            title: 'Celodenní',
                            type: 'string',
                        }),
                        defineField({
                            name: 'workingHours',
                            title: 'Pracovní',
                            type: 'string',
                        }),
                        defineField({
                            name: 'eveningWeekend',
                            title: 'Večerní a víkendové',
                            type: 'string',
                        }),
                    ],
                }),
            ],
        }),
        
        defineField({
            name: 'studentPricing',
            title: 'Studentské/55+ vstupné',
            type: 'object',
            fields: [
                defineField({
                    name: 'singleEntry',
                    title: 'Jednorázový vstup',
                    type: 'number',
                    initialValue: 100,
                }),
                defineField({
                    name: 'monthlyPass',
                    title: 'Měsíční permanentka',
                    type: 'number',
                    initialValue: 990,
                })
            ],
            options: {
                collapsible: true,
                collapsed: false
            }
        })
    ],
});

