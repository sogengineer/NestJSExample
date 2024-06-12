import { Database } from '../type';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.POSTGRES_DB,
    host: 'db',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    max: 10,
  }),
});

const db = new Kysely<Database>({
  dialect,
  log: (event) => {
    if (event.level == 'query') {
      const q = event.query;
      const time = Math.round(event.queryDurationMillis * 100) / 100;
      console.log(`\u001b[34mkysely:sql\u001b[0m [${q.sql}] parameters: [${q.parameters}] time: ${time}`);
    }
  },
});
export default db;
