import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export default async function Dashboard({params: { lang }}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <div>Dashboard</div>
  )
}