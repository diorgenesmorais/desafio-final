import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connect = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
);

export default connect;
