//harusnya file credential seperti ini ditambahkannya di file .env
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'fullstack-next'
    }
  });

  export default knex;