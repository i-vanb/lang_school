'use server';
import {FormState} from "@/lib/actions";
import {randomUUID} from "crypto";
import axios from "axios";
import {s3, uploadFile} from "@/lib/s3bucket";
import {createCourse} from "@/lib/db/course";

export async function createCourseForm(state: FormState, formData: FormData) {
  const title = formData.get('title')
  const description = formData.get('description')
  const tags = formData.getAll('tags')
  const price = formData.get('price') || 0
  const discount = formData.get('discount') || 0
  const currency = formData.get('currency')
  const premiumPrice = formData.get('premiumPrice') || 0
  const banner = formData.get('banner') as File

  const newCourse = await createCourse({
    title,
    description,
    tags,
    price,
    discount,
    currency,
    premiumPrice,
    banner
  })

  if(newCourse?.error) {
    console.log('newCourse.error', newCourse.error)
    return ({
      error: {
        message:newCourse.error,
        name: 'title'
      }
    })
  }
  console.log('newCourse', newCourse)

  // const res = await axios.post('/api/media', {
  //   file:banner
  // })
  // console.log('res', res)

  return ({
    message: 'Course created successfully'
  })
}
