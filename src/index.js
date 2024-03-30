import config from './config/config.js';

import app from './app.js';


app.listen(config.PORT, config.HOST, function () {
    console.log(`se escucha en http://${config.HOST}:${config.PORT}`);
  });
  