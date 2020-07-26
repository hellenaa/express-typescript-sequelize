import { defineUser /* associateUser */ } from './user';

const Sequelize = require('sequelize');

// const env = process.env.NODE_ENV || 'development';
const config = require('../../../config/config.json').development;

interface DB {
  [key: string]: any;
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

defineUser(sequelize);
// initIdentity(sequelize);

// associateUser();
// associateIdentity();

const db: DB = {
  sequelize,
  Sequelize,
  User: sequelize.models.User,
  // Identity: sequelize.models.Identity,
};

module.exports = db;
