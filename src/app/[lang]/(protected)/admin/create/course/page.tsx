import {Locale} from "@/i18n.config";

export async function CreateCourse({params: { lang }}: {
  params: { lang: Locale }
}) {
  return (
    <div>
      <h1>Create Course</h1>
    </div>
  )
}