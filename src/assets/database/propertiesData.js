// DATA ON THE PROPERTIES
const properties = [
    {
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        title: 'Malia Hotel',
        price: 35,
        contact: {
            email: "ronniedenzel0@gmail.com",
            phoneNumber: +0o70707070707
        },
        isAvailable: false,
        location: {
            city: "Malay",
            country: "Malaysia",
            firstLine: "Room 4",
            code: 45678
        }
    }
];
// EXPORTING THE PROPERTIES
export default properties;
