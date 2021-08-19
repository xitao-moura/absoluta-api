export const environment = {
    db: {
        url: process.env.DB_URL || 'mongodb://mongodb-abs:27017'
        //url: process.env.DB_URL || 'mongodb://absoluta-api:abs2021#@104.131.166.224:27017'
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10
    }
}