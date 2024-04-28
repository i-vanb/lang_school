import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";


type UnitCardProps = {
  id: string
  name: string
  description: string
  lessonCount: number
  exerciseCount: number
  active: boolean
  filterAction: (id:string) => void
}

export const UnitCard = (props:UnitCardProps) => {
  const {id, name, description, lessonCount, exerciseCount, active, filterAction} = props

  return (
      <Card title="" className="">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex gap-2">
              <FilterBtn active={active} filterAction={()=>filterAction(id)} />
              <GoToCourse />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs">Lessons</div>
            <p className="text-xs">{lessonCount}</p>
          </div>
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

export const AddUnitCard = () => {
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
            Create new unit
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

type FilterBtnProps = {
  active: boolean
  filterAction: () => void
}

const FilterBtn = ({active, filterAction}:FilterBtnProps) => {
  const color = active ? "#7c3aed" : "currentColor"

  return(
    <button onClick={filterAction}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={color} className="w-4 h-4">
        <path
          d="M14 2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.172a2 2 0 0 0 .586 1.414l2.828 2.828A2 2 0 0 1 6 9.828v4.363a.5.5 0 0 0 .724.447l2.17-1.085A2 2 0 0 0 10 11.763V9.829a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 0 14 4.172V2Z"/>
      </svg>
    </button>
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