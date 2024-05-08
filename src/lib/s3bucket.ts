import S3 from "aws-sdk/clients/s3";
import {randomUUID} from "crypto";
import axios from "axios";

export const s3 = new S3({
  apiVersion: '2006-03-01',
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  }
})

export async function uploadFile(file: File, folder: string = 'media') {
  try {
    const formData = new FormData()
    formData.append('file', file)
    const buffer = Buffer.from(await file.arrayBuffer())

    const Key = `${folder}/${randomUUID()}.${file.type.split('/').pop()}`

    const s3Params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key,
      Expires: 60,
      ContentType: file.type
    }
    const uploadUrl = await s3.getSignedUrlPromise('putObject', s3Params)

    // const res = await fetch(uploadUrl, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': file.type
    //   },
    //   body: buffer
    // })
    await axios.put(uploadUrl, buffer, {
      headers: {
        'Content-Type': file.type
      }
    })
    return Key

  } catch (error) {

  }
}