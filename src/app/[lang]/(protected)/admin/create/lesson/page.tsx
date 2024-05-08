import {Locale} from "@/i18n.config";
import {UnitForm} from "@/app/[lang]/(protected)/admin/unit/UnitForm";
import {LessonForm} from "@/app/[lang]/(protected)/admin/lesson/LessonForm";

export default async function CreateCourse({params: {lang}}: {
  params: { lang: Locale }
}) {
  return (
    <LessonForm />
  )
}