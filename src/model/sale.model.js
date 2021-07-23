import Sequelize from 'sequelize';
import connect from '../repositories/db.js';
import Cliente from './client.model.js';
import Livro from './book.model.js';

const Venda = connect.define('vendas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { underscored: true });

Venda.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Venda.belongsTo(Livro, { foreignKey: 'livro_id' });

export default Venda;
