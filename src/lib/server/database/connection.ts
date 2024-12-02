import { PG_DATABASE, PG_HOST, PG_PASSWORD, PG_PORT, PG_USER } from '$env/static/private';
import pg from 'pg';

export const pool = new pg.Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: +PG_PORT
});
