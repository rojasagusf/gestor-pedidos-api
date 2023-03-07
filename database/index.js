const mongoose = require('mongoose');

async function connectDatabase() {
	return await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
}

module.exports = connectDatabase;
