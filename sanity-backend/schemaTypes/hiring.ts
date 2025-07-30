export default {
        name: 'hiring',
        title: 'Nabídka práce',
        type: 'document',
        fields: [
        {
            name: 'active',
            title: 'Aktivní nabídka práce',
            type: 'boolean',
            description: 'Zobrazit sekci "Práce na recepci" na kontaktní stránce?',
            initialValue: false
        },
        {
            name: 'title',
            title: 'Nadpis',
            type: 'string',
            initialValue: 'Hledáme posilu na recepci!'
        },
        {
            name: 'description',
            title: 'Popis',
            type: 'array',
            of: [{type: 'block'}],
            description: 'Text nabídky práce'
        },
        {
            name: 'formLink',
            title: 'Odkaz na Google formulář',
            type: 'url',
            initialValue: 'https://docs.google.com/forms/d/e/1FAIpQLSf16v64k6Nwza8x58_gwNUs_nfu9h6Y_4NEltJ6aw8-Ru-nyQ/viewform'
        },
        {
            name: 'buttonText',
            title: 'Text tlačítka',
            type: 'string',
            initialValue: 'Mám zájem'
        }
        ]
    }