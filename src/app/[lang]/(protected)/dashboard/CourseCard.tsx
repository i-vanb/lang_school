'use client'


import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {CourseDTO} from "@/app/[lang]/(protected)/dashboard/page";

export const CourseCard = ({course, dictionary}: { course: CourseDTO, dictionary: any }) => {
  const {title, description, ended_unit, active_unit, unit_count, is_complete} = course;
  const progress = Math.round((active_unit / unit_count) * 100);

  return(
    <Link href={`settings`}>
      <Card title={dictionary.gotocourse} className="cursor-pointer hover:bg-violet-300 transition transition-all">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <div>
              <span className="text-sm">{active_unit}/{unit_count}</span>
              <span className="text-sm ml-2">{is_complete ? dictionary.completed : dictionary.inprogress}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
        <p className="text-sm">{course.description}</p>
        </CardContent>
        <CardFooter>
          <Progress value={progress}  />
        </CardFooter>
      </Card>
    </Link>
  )
}

