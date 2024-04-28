import { db } from './';
import {courses, courses_users, users} from './schema';
import {eq} from "drizzle-orm";
import {randomUUID} from 'crypto';

export type Course = {
  id: string;
  title: string;
  tags: string;
  description: string;
}


export const getCourses = async (user_id?:string) => {
  if(!user_id) return null;
  const result = await db.select().from(courses_users).where(eq(courses_users.user_id, user_id));

  return result;
}