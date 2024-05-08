import type {NextApiRequest, NextApiResponse} from 'next'
import S3 from 'aws-sdk/clients/s3'
import {randomUUID} from "crypto";

const s3 = new S3({
  apiVersion: '2006-03-01',
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4'
})

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const ex = (req.query.fileType as string).split('/')[1]
  const Key = `${randomUUID()}.${ex}`
  const s3Params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key,
    Expires: 60,
    ContentType: req.query.fileType as string,
    ACL: 'public-read'
  }
  console.log('s3Params', req)
  // const uploadUrl = await s3.getSignedUrlPromise('putObject', s3Params)

  res.status(200).json({
    // uploadUrl,
    key: Key
  })
}