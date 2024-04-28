export default function Page({params}) {
  // const getCourse =

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Course {params.id}</h1>
    </div>
  )
}