'use client'
import {AddCourseCard} from "@/app/[lang]/(protected)/admin/create/CourseCard";
import {Course, CourseList} from "@/app/[lang]/(protected)/admin/CourseList";
import {Wrapper} from "@/app/layouts/Wrapper";
import * as React from "react";
import {Unit, UnitList} from "@/app/[lang]/(protected)/admin/UnitList";
import {AddUnitCard} from "@/app/[lang]/(protected)/admin/create/UnitCard";
import {AddLessonCard} from "@/app/[lang]/(protected)/admin/create/LessonCard";
import {Lesson, LessonList} from "@/app/[lang]/(protected)/admin/LessonList";


type Props = {
  courses: Array<Course>
  units: Array<Unit>
  lessons: Array<Lesson>
}

export const AdminDashboard = ({courses, units, lessons}:Props) => {
  const [activeCourse, setActiveCourse] = React.useState<string|null>(null);
  const [activeUnit, setActiveUnit] = React.useState<string|null>(null);

  const setActiveCourseHandler = (id:string) => {
    setActiveCourse(prevState => prevState === id ? null : id)
  }
  const setActiveUnitHandler = (id:string) => {
    setActiveUnit(prevState => prevState === id ? null : id)
  }

  return(
    <Wrapper className="flex-1 my-12 space-y-12">
      <section>
        <h1 className="font-bold my-4">Our Courses</h1>
        <div className="flex flex-col items-center gap-5 md:items-stretch md:flex-row">
          <AddCourseCard />
          <CourseList list={courses} active={activeCourse} setActive={setActiveCourseHandler} />
        </div>
      </section>

      <section>
        <h1 className="font-bold my-4">Units</h1>
        <div className="flex flex-col items-center gap-5 md:items-stretch md:flex-row">
          <AddUnitCard />
          <UnitList list={units} course_id={activeCourse} active={activeUnit} setActive={setActiveUnitHandler} />
        </div>
      </section>

      <section>
        <h1 className="font-bold my-4">Lessons</h1>
        <div className="flex flex-col items-center gap-5 md:items-stretch md:flex-row">
          <AddLessonCard />
          <LessonList list={lessons} unit_id={activeUnit} />
        </div>
      </section>
    </Wrapper>
  )
}