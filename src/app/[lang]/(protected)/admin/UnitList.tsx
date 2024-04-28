'use client'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {UnitCard} from "@/app/[lang]/(protected)/admin/create/UnitCard";

type CourseListProps = {
  active: string | null
  course_id: string | null
  setActive: (id:string) => void
  list: Array<Unit>
}
export type Unit = {
  id: string
  name: string
  description: string
  lessonCount: number
  exerciseCount: number
  course_id: string
}

export function UnitList({course_id, active, setActive, list}:CourseListProps) {

  return (
    <div className="overflow-hidden md:px-[60px] w-full md:flex-[4] md:w-9/12">

      {course_id &&
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {list.map((i, index) => {
              const isActive = active === i.id
              if (course_id !== i.course_id) return null
              return <CarouselItem key={i.id} className="md:basis-1/2 lg:basis-1/3">
                <UnitCard id={i.id}
                          name={i.name}
                          description={i.description}
                          lessonCount={i.lessonCount}
                          exerciseCount={i.exerciseCount}
                          active={isActive}
                          filterAction={setActive}
                />
              </CarouselItem>
            })}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      }
    </div>
  )
}
