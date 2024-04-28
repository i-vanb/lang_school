'use client'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {LessonCard} from "@/app/[lang]/(protected)/admin/create/LessonCard";

type LessonListProps = {
  unit_id: string | null
  list: Array<Lesson>
}

export type Lesson = {
  id: string
  name: string
  description: string
  exerciseCount: number
  unit_id: string
}

export function LessonList({unit_id, list}:LessonListProps) {

  return (
    <div className="overflow-hidden md:px-[60px] w-full md:flex-[4] md:w-9/12">

      {unit_id &&
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {list.map((i, index) => {
              if (unit_id !== i.unit_id) return null
              return <CarouselItem key={i.id} className="md:basis-1/2 lg:basis-1/3">
                <LessonCard id={i.id}
                          name={i.name}
                          description={i.description}
                          exerciseCount={i.exerciseCount}
                          unit_id={i.unit_id}
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
