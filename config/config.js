module.exports = {
    development: {
        url: 'postgres://mqzsgegq:6LAsvDPOXvxWiD5JRTslOlrT8r-vUjv-@mahmud.db.elephantsql.com/mqzsgegq',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
