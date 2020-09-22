module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'secret',
    database: 'denverdb',
    define: {
        timestamps: true,
        underscored: true,
    }
}