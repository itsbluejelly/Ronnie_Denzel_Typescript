// DATA ON THE USERS SO FAR
const users = [
    {
        id: 1,
        userName: {
            firstName: 'Ronnie',
            lastName: 'Denzel'
        },
        permissions: 'ADMIN',
        isReturning: true,
        age: 35,
        stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
    },
    {
        id: 2,
        userName: { firstName: 'Bobby' },
        permissions: 'READ_ONLY',
        isReturning: true,
        age: 30,
        stayedAt: ['florida-home', 'oman-flat']
    },
    {
        id: 3,
        userName: {
            firstName: 'Colleen',
            lastName: 'Joy'
        },
        isReturning: false,
        age: 25,
        stayedAt: ['florida-home']
    }
];
// EXPORTING THE LIST OF USERS
export default users;
