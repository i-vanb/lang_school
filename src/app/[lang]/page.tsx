import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import {Wrapper} from "@/app/layouts/Wrapper";
import {DemoLesson} from "@/app/[lang]/DemoLesson";
import {FAQ} from "@/app/[lang]/FAQ";
import {CourseCards} from "@/app/[lang]/CourseCards";
import {Button} from "@/components/ui/button";
import {Reviews} from "@/app/[lang]/Reviews";

export default async function Home({params: { lang }}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <main className="mb-8">
      {/*<Wrapper className="flex justify-center items-center h-[60px]">*/}
      {/*    <h1 className="text-lg font-bold text-center sm:text-2xl font-extralight">{page.home.welcome}</h1>*/}
      {/*</Wrapper>*/}
      <section className="relative">
        <div className="intro-bg h-[250px] sm:h-[calc(100vh-80px)] bg-indigo-950 flex justify-center"></div>
        <Wrapper className="z-10 my-4 w-full bottom-6 left-0 right-0 sm:absolute " small={true}>
          <div className="text-l sm:text-white font-bold mb-2">
            {page.home.intro_1}
          </div>
          <div className="text-2xl sm:text-white font-bold mb-4 sm:text-4xl">
            {page.home.intro_2}
          </div>
          <Button className="bg-amber-500 mb-4">{page.choose_now_link}</Button>
          <div className="font-bold sm:text-white mb-2 sm:text-2xl">
            {page.home.intro_3}
          </div>
          <div className="font-bold sm:text-white sm:text-2xl">
            {page.home.intro_4}
          </div>
        </Wrapper>
      </section>
      <DemoLesson lang={lang}  />
      <FAQ lang={lang} />
      <CourseCards lang={lang} />
      <Wrapper>
        <section className="my-12">
          <h1 className="text-2xl font-bold mb-12 text-center">{page.waiting.title}</h1>
          <div className="gap-8 md:flex my-6">
            <ul className="list-inside list-disc">
              <li className="my-2 lowercase">{page.waiting.list.item_1}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_2}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_3}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_4}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_5}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_6}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_7}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_8}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_9}</li>
              <li className="my-2 lowercase">{page.waiting.list.item_10}</li>
            </ul>
          </div>
        </section>
        <section className="my-12 text-center">
          <h3 className="text-2xl text-center mb-4 text-amber-500">{page.choose_packet}</h3>
          <Button className="bg-amber-500">{page.buy_link_label}</Button>
        </section>
      </Wrapper>
      <Reviews lang={lang} />
    </main>
  );
}
