import {signOut} from "@/auth"
import {Button} from "@/components/ui/button";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";

export async function SignOut({lang}:{ lang: Locale }) {
  const { header } = await getDictionary(lang)

  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">{header.sign_out}</button>
    </form>
  )
}
