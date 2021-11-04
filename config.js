let defaultt = 'development';
if (process.env.NODE_ENV) {
	defaultt = process.env.NODE_ENV;
}
console.info(`[LOADING API ON ${defaultt} CONF.]`);
function get() {
	const config = require('dotenv').config({
		path: `.env.${defaultt}`
	});
	return config.parsed;
}
module.exports = { get };
