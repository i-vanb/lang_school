import {Locale} from "@/i18n.config";
import {Wrapper} from "@/app/layouts/Wrapper";
import {getDictionary} from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";


export const DemoLesson = async ({lang}: Props) => {
  const { page } = await getDictionary(lang)

  return (
    <section className="">
      <Wrapper className="my-12" small={true}>
        <div className="flex justify-center mb-12">
          <Button className="bg-amber-500">{page.try.free}</Button>
        </div>
        <h1 className="mb-4">{page.try.details}</h1>
        <ul className="list-inside list-disc">
          <li className="mb-2">{page.try.details_1}</li>
          <li className="mb-2">{page.try.details_2}</li>
          <li className="mb-2">{page.try.details_3}</li>
          <li className="mb-2">{page.try.details_4}</li>
        </ul>
        <section className="my-8">
          <h1 className="text-2xl font-bold mb-4 text-center">{page.course.title}</h1>
          <Accordion type="multiple">
            {page.course.list.map(i => {
              return (
                <AccordionItem key={i.title} value={i.title}>
                  <AccordionTrigger className="text-left">{i.title}</AccordionTrigger>
                  {i.content.map((c, ind)=>{
                    return (
                      <AccordionContent key={ind}>
                        <div className="link_wrapper flex justify-between text-amber-500">
                          <Link href={c.link}>{c.title}</Link>
                          {/*<div className="link_label">{c.link_label}</div>*/}
                        </div>
                      </AccordionContent>
                    )
                  })}
                </AccordionItem>
              )
            })}
          </Accordion>
        </section>
      </Wrapper>
    </section>
  )
}

type Props = {
  lang: Locale
}