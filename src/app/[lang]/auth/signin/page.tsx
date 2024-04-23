import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import SignInForm from "./SignInForm";

export default async function SignIn({params: { lang }}:{params: { lang: Locale }}) {
  const {auth} = await getDictionary(lang)

  return <SignInForm dictionary={auth} locale={lang} />
}