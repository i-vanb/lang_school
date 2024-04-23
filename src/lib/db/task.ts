import { db } from './';
import {status_type, tasks} from "@/lib/db/schema";
import {count, eq} from "drizzle-orm";

export const getTasksStatusList = async () => {
  const result = await db.select().from(status_type);

  return result;
}

export const getTaskList = async ():Promise<Task[]> => {
  return await db.select().from(tasks);
}
export const getTaskListByStatus = async (status:number):Promise<Task[]> => {
  return await db.select().from(tasks).where(eq(tasks.status, status));
}


export const getTasksStatusListWithCount = async () => {
  return await db.select({id:tasks.status, count: count(), name: status_type.name})
      .from(tasks)
      .groupBy(tasks.status, status_type.name)
      .leftJoin(status_type, eq(status_type.id, tasks.status));
}

export type TaskCount = {
  id: number;
  count: number;
  name: string;
}

export type Task = {
  id: number;
  title: string;
  description: string | null;
  user_id: string;
  creator_id: string;
  created_at: Date;
  updated_at: Date;
  status: number;
  isImportant: boolean;
  org_id: string;
}