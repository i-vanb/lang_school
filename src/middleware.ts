import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {i18n} from '@/i18n.config'
import {match as matchLocale} from '@formatjs/intl-localematcher'

import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  publicRoutes,
  apiAuthPrefix
} from "@/routes";

const { auth } = NextAuth(authConfig)


function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  let currentLocale = ""

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => {
      const isBool = !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      if (!isBool) currentLocale = locale
      return isBool
    }
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }

  const response = NextResponse.next()
  const cookieLocale = request.cookies.get('locale') || {} as any

  if(cookieLocale?.value !== currentLocale) {
    response.cookies.set({name: 'locale', value: currentLocale, path: '/'});
  }

  return response
}

function getLocale(request: NextRequest): string | undefined {
  const {value} = request.cookies.get('locale') || {} as any
  // console.log('cookie', value, i18n.locales.includes(value))

  if (value && i18n.locales.includes(value)) {
    return value;
  }

  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const Negotiator = require('negotiator')
  const languages = new Negotiator({headers: negotiatorHeaders}).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export default auth((request: NextRequest)=> {
  const {nextUrl} = request
  const pathname = nextUrl.pathname

  // LOCALE MIDDLEWARE
  let currentLocale = ""

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => {
      const isBool = !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      if (!isBool) currentLocale = locale
      return isBool
    }
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }

  const response = NextResponse.next()
  const cookieLocale = request.cookies.get('locale') || {} as any

  if(cookieLocale?.value !== currentLocale) {
    response.cookies.set({name: 'locale', value: currentLocale, path: '/'});
  }
  // END LOCALE MIDDLEWARE

  // AUTH MIDDLEWARE
  currentLocale = '/' + currentLocale
  const authRoutesWithLocale = authRoutes.map(route => currentLocale + route)
  const publicRoutesWithLocale = publicRoutes.map(route => currentLocale + route)
  const defaultLoginRedirect = currentLocale + DEFAULT_LOGIN_REDIRECT

  const isLoggedIn = !!request.auth
  const isAuthRoute = authRoutesWithLocale.includes(pathname)
  const isPublicRoute = publicRoutesWithLocale.includes(pathname)
  const isAuthApi = pathname.startsWith(currentLocale + '/' + apiAuthPrefix)

  if(isAuthApi) {
    return null
  }

  // console.log('redirecting after signin', nextUrl, new URL(defaultLoginRedirect, nextUrl))

  if(isAuthRoute) {
    if(isLoggedIn) {
      return NextResponse.redirect(
        new URL(
          defaultLoginRedirect,
          request.url
        )
      )
    }
    return null
  }

  if(!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(
      new URL(
        currentLocale + '/auth/signin',
        request.url
      )
    )
    // console.log('redirecting to signin')
    // return Response.redirect(new URL('/auth/signin', nextUrl))
  }

  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|api).*)", "/", "/(___api|trpc)(.*)" ]
};