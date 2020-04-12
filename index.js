'use strict';

const config = require('./src/config');
const app = require('./src');

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
