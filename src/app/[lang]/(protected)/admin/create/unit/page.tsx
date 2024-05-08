import {Locale} from "@/i18n.config";
import {UnitForm} from "@/app/[lang]/(protected)/admin/unit/UnitForm";

export default async function CreateCourse({params: {lang}}: {
  params: { lang: Locale }
}) {
  return (
    <UnitForm />
  )
}