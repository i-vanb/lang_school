import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import {auth} from "@/auth";
import {Wrapper} from "@/app/layouts/Wrapper";
import {Course, getCourses} from "@/lib/db/course";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import {CourseCard} from "@/app/[lang]/(protected)/dashboard/CourseCard";

export default async function Dashboard({params: { lang }}: {
  params: { lang: Locale }
}) {
  // @ts-ignore
  const { dashboard } = await getDictionary(lang)
  const session = await auth();
  const user = session?.user

  // #TODO add Error view about checking authorization
  if(!user) return null

  const courses = await getCourses(user.id);
  // #TODO add Error view about checking authorization
  if(!courses) return null

  return (
    <Wrapper className="flex-1 my-4">
      <div className="flex flex-col justify-between items-center gap-5 md:flex md:flex-row mb-12">
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-5">
            {dashboard.greetings} {session?.user?.name}
          </h3>
          <p>{dashboard.welcome}</p>
        </div>
        <div className="flex-1">
          <div>
            <h3 className="font-bold text-sm mb-5">
              {dashboard.continue}
            </h3>
            some active units
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-bold text-sm mb-5">
          {dashboard.yourcourses}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dump.map(i => {
            return <CourseCard key={i.id} course={i} dictionary={dashboard} />
          })}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-bold text-sm mb-5">
          {dashboard.yourmodules}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ModuleCard course={{title:"Module 2", description: "Some description"}} dictionary={dashboard} />
          <ModuleCard course={{title:"Module 3", description: "Some description"}} dictionary={dashboard} />
          <ModuleCard course={{title:"Module 4", description: "Some description"}} dictionary={dashboard} />
          {/*{courses.length*/}
          {/*  ? <CoursesGrid items={courses}/>*/}
          {/*  : <div className="text-gray-400">{dashboard.nocourses}</div>*/}
          {/*}*/}
        </div>
      </div>

    </Wrapper>
  )
}

type CarouselProps = {
  items: Array<CourseDTO>
}

const dump:Array<CourseDTO> = [
  {
    id: "1scds",
    title: "Rus Expresso",
    description: "This is a fast-paced course designed to help you learn Russian quickly and efficiently.",
    active_unit: 3,
    ended_unit: 2,
    is_complete: false,
    unit_count: 12
  },
  {
    id: "12scds",
    title: "Easy Turkish",
    description: "This is a fast-paced course designed to help you learn Turkish quickly and efficiently.",
    active_unit: 0,
    ended_unit: 0,
    is_complete: false,
    unit_count: 18
  }
]

export type CourseDTO = {
  id: string,
  title: string,
  description: string,
  unit_count: number,
  ended_unit: number,
  active_unit: number,
  is_complete: boolean,
}

export const ModuleCard = ({course, dictionary}: { course: CourseDTO, dictionary: any }) => {
  return(
    <Link href={`settings`}>
      <Card title={dictionary.gotocourse} className="cursor-pointer hover:bg-violet-300">
        <CardHeader>
          <h3 className="text-lg font-semibold">{course.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{course.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}