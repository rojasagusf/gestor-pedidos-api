require('dotenv').config();
const {initialize} = require('../app');
const connectDatabase = require('../database');
const PORT = Number(process.env.SERVER_PORT) || 3000;


return connectDatabase()
	.then(() => {
		const application = initialize();

		application.listen(PORT, () => {
			console.log(`You server is listening on port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
