
const env = process.env;

export default {
  db: {
    type: env.DB_TYPE || 'postgres',
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || 5432,
    username: env.DB_USER,
    password: env.DB_USER_PWD,
    database: env.DB_NAME,
    synchronize: (
      env.ORM_SYNC ? env.ORM_SYNC.toLocaleLowerCase() === 'true' : true
    ),
    logging: (
      env.ORM_LOGGING ? env.ORM_LOGGING.toLocaleLowerCase() === 'true' : false
    ),
  },
  server: {
    port: 4000
  }
};
