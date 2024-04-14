import {Locale} from "@/i18n.config";
import { getDictionary } from '@/lib/dictionary'

export const SignButton = async ({lang}: { lang: Locale }) => {
  const { header } = await getDictionary(lang)

  return (
    <button>{header.sign_in}</button>
  );
}