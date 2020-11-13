require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    production: {
        "use_env_variable": "DATABASE_URL",
        "dialect": "postgres",
        "operatorsAliases": false
    },
    url: process.env.DATABASE_URL,
    define: {
        timestamps: true,
        underscored: true,
    }
}