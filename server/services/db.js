const Sequelize = require('sequelize')
const connectionString = process.env.DATABASE_URL ||'postgres://postgres:123456@localhost:5432/PernTodo';
const db = new Sequelize(connectionString);

module.exports = db;