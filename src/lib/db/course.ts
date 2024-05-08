import { db } from './';
import {courses, courses_users, currencies, users} from './schema';
import {eq} from "drizzle-orm";
import {randomUUID} from 'crypto';
import {CourseT} from "@/app/types";
import {uploadFile} from "@/lib/s3bucket";



export const getCurrencies = async () => {
  const result = await db.select().from(currencies);
  return result;

}

export const getCourses = async (user_id?:string) => {
  if(!user_id) return null;
  const result = await db.select().from(courses_users).where(eq(courses_users.user_id, user_id));

  return result;
}

export const getCourseByTitle = async (title:string) => {
  const result = await db.select().from(courses).where(eq(courses.title, title));
  return result;
}

type CreateCourseProps = {
  hero: File | null;
  banner: File | null;
} & CourseT;

export const createCourse = async (course: any):Promise<string|{error:string}> => {
  // check if the title is unique
  const courseByTitle = await db.select().from(courses).where(eq(courses.title, course.title));
  if(courseByTitle.length > 0) {
    return({error: 'Course title already exists'})
  }

  const bannerUrl = await uploadFile(course.banner)

  const course_id = await db.insert(courses).values({
    title: course.title,
    description: course.description,
    tags: course.tags,
    price: course.price,
    discount: course.discount,
    currency: course.currency,
    premiumPrice: course.premiumPrice,
    image: bannerUrl
  }).returning({id: courses.id});

  return course_id[0].id;
}

