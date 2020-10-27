const { Model, Sequelize } = require('sequelize');

class Role extends Model{
    static init(sequelize) {
        super.init({
            tag: Sequelize.STRING,
            name: Sequelize.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasMany(models.User, { foreignKey: 'role', as: 'role_id' });
    }
}

module.exports = Role;