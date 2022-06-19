//harusnya file credential seperti ini ditambahkannya di file .env
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://berhjvqckojzuz:53271100b75afe8e251a599a4e16f470c2772696843bb9c4cd2968759765489d@ec2-3-228-236-221.compute-1.amazonaws.com:5432/d8t85vq435vfiq?ssl=false',
  searchPath: ['knex', 'public'],
  ssl: false,
});
  export default knex;