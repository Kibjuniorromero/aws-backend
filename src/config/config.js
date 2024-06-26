// config.js
const dotenv = require('dotenv');

dotenv.config({
  path:  `./.env.${process.env.NODE_ENV}` 
});


module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 3000
}