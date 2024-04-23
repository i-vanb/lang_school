import { db } from './';
import { users } from './schema';
import {eq} from "drizzle-orm";
import {randomUUID} from 'crypto';


export const getUserById = async (id: string) => {
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);

  return result[0];

}

export const getUserByEmail = async (email: string) => {
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);

  return result;
}

export const createUser = async (email: string, name: string, password: string) => {
  try {
    return await db.insert(users).values({
      id: randomUUID(),
      email,
      name,
      password,
    })
  } catch (error) {
    return {errors: {message: 'An error occurred'}}
  }
}