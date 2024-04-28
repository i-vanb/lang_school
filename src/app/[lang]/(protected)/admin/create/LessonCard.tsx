import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

type LessonCardProps = {
  id: string
  unit_id: string
  name: string
  description: string
  exerciseCount: number
}

export const LessonCard = (props:LessonCardProps) => {
  const {id, name, description, unit_id, exerciseCount} = props

  return (
      <Card title="" className="">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex gap-2">
              <GoToCourse />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs">Exercises</div>
            <p className="text-xs">{exerciseCount}</p>
          </div>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
  )
}

export const AddLessonCard = () => {
  return (
    <Link href={`settings`} className="w-full md:w-1/4 md:flex-1">
      <Card title="" className="cursor-pointer hover:bg-violet-300 h-[100%]">
        <CardContent className="p-6 flex flex-col h-[100%] justify-center items-center gap-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" fill="currentColor"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"/>
          </svg>
          <p className="text-sm">
            Create new lesson
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

const GoToCourse = () => {
  return (
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd"
              d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
              clipRule="evenodd"/>
      </svg>
    </button>
  )
}