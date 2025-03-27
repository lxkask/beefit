import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'groupSessions',
    title: 'Skupinové lekce',
    type: 'document',
    fields: [
        defineField({
            name: 'sessions',
            title: 'Rozvrh lekcí',
            type: 'array',
            of: [
                defineField({
                    name: 'session',
                    title: 'Lekce',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'day',
                            title: 'Den v týdnu',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Pondělí', value: 'Pondělí'},
                                    {title: 'Úterý', value: 'Úterý'},
                                    {title: 'Středa', value: 'Středa'},
                                    {title: 'Čtvrtek', value: 'Čtvrtek'},
                                    {title: 'Pátek', value: 'Pátek'},
                                    {title: 'Sobota', value: 'Sobota'},
                                    {title: 'Neděle', value: 'Neděle'}
                                ],
                                layout: 'dropdown'
                            }
                        }),
                        defineField({
                            name: 'time',
                            title: 'Čas konání',
                            type: 'string',
                            description: 'Např: 10:00 - 11:00',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'title',
                            title: 'Název lekce',
                            type: 'string',
                            description: 'Např: Pružné tělo s Martinem',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'description',
                            title: 'Popis lekce',
                            type: 'text',
                            description: 'Např: Lekce zaměřena na problémy sedavého zaměstnání',
                            rows: 2
                        })
                    ],
                    preview: {
                        select: {
                            day: 'day',
                            time: 'time',
                            title: 'title'
                        },
                        prepare({day, time, title}) {
                            return {
                                title: `${day} - ${time}`,
                                subtitle: title
                            }
                        }
                    }
                })
            ]
        })
    ]
});