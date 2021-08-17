export const environment = {
    db: {
        url: process.env.DB_URL || 'mongodb://absoluta-api:abs2021#@localhost:27017'
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10
    }
}