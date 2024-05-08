export default function Page({params}) {
  // const getCourse =

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Course {params.id}</h1>
      <div>
        <video width="920" height="440" controls >
          <source src="/videos/lesson1.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}