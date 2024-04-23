import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import SignUpForm from "@/app/[lang]/auth/signup/SignUpForm";


export default async function SignUp({params: { lang }}:{params: { lang: Locale }}) {
  const { auth } = await getDictionary(lang)

  return <SignUpForm dictionary={auth} />
}