import {db} from "@/lib/db";
import {courses} from "@/lib/db/schema";

export async function POST(request: Request) {
  // const body = await request.formData()
  // const hero = body.get('hero')
  // const banner = body.get('banner')
  // const title = body.get('title')
  // const description = body.get('description')
  // const price = body.get('price')
  // const currency = body.get('currency')
  // const premiumPrice = body.get('premiumPrice')
  // const discount = body.get('discount')
  // const tags = body.get('tags')

  // console.log('body', body)

  // const course = await db.insert(courses).values({
  //   title,
  //   description,
  //   price,
  //   currency,
  //   premiumPrice,
  //   discount,
  //   tags
  // }).returning()

  // const course_id = course[0].id
  // console.log('course', course)




  return Response.json({}, {status: 200})
}