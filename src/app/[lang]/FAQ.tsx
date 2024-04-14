import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Wrapper} from "@/app/layouts/Wrapper";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export const FAQ = async ({lang}: Props) => {
  const { page } = await getDictionary(lang)

  return (
    <Wrapper small={true}>
      <section className="my-12">

          <h1 className="text-2xl font-bold mb-6 text-center">{page.faq.title}</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{page.faq.q1}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a1}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{page.faq.q2}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a2}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{page.faq.q3}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a3}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{page.faq.q4}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a4}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{page.faq.q5}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a5}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>{page.faq.q6}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a6}
              </AccordionContent>
              <AccordionContent>
                {page.faq.a6_1}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>{page.faq.q7}</AccordionTrigger>
              <AccordionContent>
                {page.faq.a7}
              </AccordionContent>
              <AccordionContent>
                {page.faq.a7_1}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </section>
    </Wrapper>
  )
}

type Props = {
  lang: Locale
}
