// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'postgresql',
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + `?ssl=true`,
      migrations: {
        directory: './db/migrations'
      },
      useNullAsDefault: true
    }
    // use_env_variable: "DATABASE_URL",
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
  
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  // }

};
