import { Sequelize } from 'sequelize';
import config from '../configs/database';

const sequelize = new Sequelize(
    config.url,
    config
);

export default sequelize;