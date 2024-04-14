import {Wrapper} from "@/app/layouts/Wrapper";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Image from 'next/image';
import Link from "next/link";

export const CourseCards = async ({lang}: Props) => {
  const {page} = await getDictionary(lang)

  return (
    <Wrapper>
      <section className="my-12">
        <h1 className="text-2xl font-bold mb-12 text-center">{page.courses.title}</h1>
        <div className="gap-8 md:flex my-6">
          <div className="py-6 flex-1">
            <p>{page.courses.list.item_1}</p>
            <p>{page.courses.list.item_2}</p>
            <p>{page.courses.list.item_3}</p>
          </div>
          <div className="flex-1">
            <Image src="/images/main2.jpg" alt="teacher" width={455} height={237} className="rounded-md w-full" />
          </div>
        </div>
        <div className="gap-8 md:flex">
          <div className="flex-1">
            <Link href={`/`}>
              <Image src="/images/course_card_1.jpeg" alt="course-1" width={455} height={237} className="rounded-md w-full transform transition duration-500 hover:animate-shake" />
            </Link>
            <p className="text-center my-2">{page.courses.list.buy_link}</p>
          </div>
          <div className="flex-1">
            <Link href={`/`}>
              <Image src="/images/course_card_2.jpeg" alt="course-1" width={455} height={237} className="rounded-md w-full transform transition duration-500 hover:animate-shake" />
            </Link>
            <p className="text-center my-2">{page.courses.list.buy_link}</p>
          </div>
        </div>
      </section>
    </Wrapper>

  )
}

type Props = {
  lang: Locale
}
