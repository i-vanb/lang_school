'use client'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {CourseCard} from "@/app/[lang]/(protected)/admin/create/CourseCard";
import {CourseT} from "@/app/types";

type CourseListProps = {
  active: string | null
  setActive: (id:string) => void
  list: Array<CourseCardT>
}

type CourseCardT = {
  unitCount: number
  lessonCount: number
  exerciseCount: number
} & CourseT

export function CourseList({list, active, setActive}:CourseListProps) {

  return (
    <div className="overflow-hidden md:px-[60px] w-full md:flex-[4] md:w-9/12">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {list.map((i, index) => {
          const isActive = active === i.id
          return <CarouselItem key={i.id} className="md:basis-1/2 lg:basis-1/3">
            <CourseCard id={i.id || ""}
                        title={i.title || ""}
                        description={i.description || ""}
                        price={i.price || 0}
                        discount={i.discount || 0}
                        premiumPrice={i.premiumPrice || 0}
                        unitCount={i.unitCount}
                        lessonCount={i.lessonCount}
                        exerciseCount={i.exerciseCount}
                        currency={i.currency || 0}
                        active={isActive}
                        filterAction={setActive}
            />
          </CarouselItem>
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
