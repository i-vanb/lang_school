'use client';
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {i18n, Locale} from '@/i18n.config'

export default function LocaleSwitcher({lang}: { lang: Locale }) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/');
  }



  const getLocaleFlag = (lang:Locale) => {
    const src = `/images/flags/${lang}.png`
    return <Image key={lang} className="block border rounded" src={src} width={22} height={24} alt={lang} />
  }

  return (
    <div className='flex gap-x-3 items-center'>
      {
        i18n.locales.map(locale => {
          const label = getLocaleFlag(locale);
          if(locale === lang) return label;

          return (
              <Link key={locale} href={redirectedPathName(locale)}>
                {label}
              </Link>
          )
        })
      }
    </div>
  )
}