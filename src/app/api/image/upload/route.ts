
export async function POST(request: Request) {
  const body = await request.formData()
  const image = body.get('image')
  const url = body.get('url')
  // console.log('POST /api/image/upload', url)
  return Response.json({ message: 'POST /api/image/upload' })
}