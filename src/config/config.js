// config.js
const dotenv = require('dotenv');

dotenv.config({
  path:  `./.env.${process.env.NODE_ENV}` 
});


module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '44.211.197.184',
  PORT: process.env.PORT || 3000
}