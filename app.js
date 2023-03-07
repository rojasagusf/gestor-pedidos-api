const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

function initialize() {
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(cors());

	return app;
}

module.exports = {
	initialize,
};

