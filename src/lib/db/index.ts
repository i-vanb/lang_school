import {neon, neonConfig} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';

// import * as dotenv from "dotenv";
// dotenv.config({path: '.env'});

neonConfig.fetchConnectionCache = true;


if(!process.env.NEXT_DATABASE_URL) {
  throw new Error('NEXT_DATABASE_URL is not set');
}



const sql = neon(process.env.NEXT_DATABASE_URL);

export const db = drizzle(sql)