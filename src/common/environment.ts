export const environment = {
    db: {
        url: process.env.DB_URL || 'mongodb://localhost:27017'
        //url: process.env.DB_URL || 'mongodb://potencialUserHomolog:rewq987aa@200.219.222.90:27017'
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10
    }
}