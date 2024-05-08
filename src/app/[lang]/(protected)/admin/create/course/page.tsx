import {Locale} from "@/i18n.config";
import {CourseForm} from "@/app/[lang]/(protected)/admin/course/CourseForm";
import {getCurrencies} from "@/lib/db/course";

export default async function CreateCourse({params: {lang}}: {
  params: { lang: Locale }
}) {
  const currencyList = await getCurrencies()

  return (
    // <div>TEST</div>
    <CourseForm listCurrency={currencyList} />
  )
}