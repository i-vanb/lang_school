import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Confetti} from "@/components/ui/confetti";


export default async function Success({params: { lang }}:{params: { lang: Locale }}) {
  const { auth } = await getDictionary(lang)

  return (
    <div className="absolute h-screen w-full inset-0 flex items-center justify-center bg-background">
      <div className="shadow-neon rounded-md">
        <Confetti recycle={false} />
        <Card>
          <CardHeader>
            <CardTitle>
              {auth.success.title}
            </CardTitle>
            <CardDescription>
              {auth.success.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link className="text-[#ff00ff6b]" href="/auth/signin">{auth.success.link}</Link>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}