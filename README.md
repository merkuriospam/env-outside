# env-outside

Load `.env` files from outside your project folder — keep credentials away from your codebase.

## Install

```bash
npm install env-outside
```

## Usage

### Via code
```js
const env = require('env-outside');
env.load({ path: '/home/user/secrets/mi-proyect-secret' });
```

### Via environment variable
```bash
ENV_OUTSIDE_PATH=/home/user/secrets node app.js
```

The loaded variables are available in `process.env` as with dotenv.
