import Venda from '../model/sale.model.js';
import Cliente from '../model/client.model.js';
import Livro from '../model/book.model.js';
import Autor from '../model/author.model.js';

export default {
    getAll: async () => {
        try {
            return await Venda.findAll({
                include: [
                    {
                        model: Cliente
                    },
                    {
                        model: Livro
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            return await Venda.findOne({
                include: [
                    {
                        model: Cliente
                    },
                    {
                        model: Livro,
                        include: [
                            {
                                model: Autor
                            }
                        ]
                    }
                ],
                where: {
                    id
                }
            });
        } catch (error) {
            throw error;
        }
    },
    create: async (entity) => {
        try {
            return await Venda.create(entity);
        } catch (error) {
            throw error;
        }
    },
    destroy: async (id) => {
        try {
            return await Venda.destroy({
                where: {
                    id
                }
            });
        } catch (error) {
            throw error;
        }
    },
    update: async (entity) => {
        // append RETURNING in Postgres
        const { valor, estoque } = entity;
        try {
            const [ , result] = await Venda.update({ valor, estoque }, {
                where: {
                    id: entity.id
                },
                returning: true
            });
            return result[0].dataValues;
        } catch (error) {
            throw error;
        }
    },
    byClient: async (foreignKey) => {
        try {
            return await Venda.findAll({
                include: [
                    {
                        model: Cliente,
                        attributes: {
                            exclude: ['senha']
                        }
                    }
                ],
                where: {
                    cliente_id: foreignKey
                }
            });
        } catch (error) {
            throw error;
        }
    },
    byBook: async (foreignKey) => {
        try {
            return await Venda.findAll({
                include: [
                    {
                        model: Livro
                    }
                ],
                where: {
                    livro_id: foreignKey
                }
            });
        } catch (error) {
            throw error;
        }
    },
    byAuthor: async (foreignKey) => {
        try {
            return await Venda.findAll({
                include: [
                    {
                        model: Livro,
                        where: {
                            autor_id: foreignKey
                        },
                        include: [
                            {
                                model: Autor
                            }
                        ]
                    }
                ]
            });
        } catch (error) {
            throw error;
        }
    }
}
