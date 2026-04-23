const dotenv = require('dotenv');
const path = require('path');

function load(options = {}) {
  const folder = options.path || process.env.ENV_OUTSIDE_PATH;

  if (!folder) {
    throw new Error('env-outside: no path provided. Use options.path or ENV_OUTSIDE_PATH env variable.');
  }

  const filePath = path.join(folder, '.env');
  return dotenv.config({ path: filePath });
}

module.exports = { load };
