const Pool = require('pg').Pool
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
}

const proConfig = {
  connectionString: process.env.DATABASE_URL
};

// const pool = new Pool(process.env.NODE_ENV === 'production' ? devConfig : proConfig)
const pool = new Pool(devConfig)

module.exports = pool;