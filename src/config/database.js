require('dotenv/config');

module.exports = {
    /* dialect: 'postgres',
    production: {
        "use_env_variable": "DATABASE_URL",
        "dialect": "postgres",
        "operatorsAliases": false
    },
    url: process.env.DATABASE_URL,
    define: {
        timestamps: true,
        underscored: true,
    }*/
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": "postgres",
      "operatorsAliases": false
    },
    "production": {
      "use_env_variable": "DATABASE_URL",
      "dialect": "postgres",
      "operatorsAliases": false
    }
}