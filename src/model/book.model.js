import Sequelize from 'sequelize';
import connect from '../repositories/db.js';
import Autor from './author.model.js';

const Livro = connect.define('livros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

Livro.belongsTo(Autor, { foreignKey: 'autor_id' });

export default Livro;
