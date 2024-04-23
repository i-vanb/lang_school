'use server';

import { z } from 'zod'
import {createUser, getUserByEmail} from "@/lib/db/user";
import bcryptjs from "bcryptjs";
import {signIn} from "@/auth";
import {SignInSchema, SignUpSchema} from "@/lib/db/SignDTO";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";
import {NextResponse} from "next/server";
import {Locale} from "@/i18n.config";


// export async function authenticate(_currentState: unknown, formData: FormData) {
//   try {
//     const result = await signIn('credentials', formData)
//
//
//
//     return result
//   } catch (error) {
//     if (error) {
//       // switch (error.type) {
//       //   case 'CredentialsSignin':
//       //     return 'Invalid credentials.'
//       //   default:
//       //     return 'Something went wrong.'
//       // }
//     }
//     throw error
//   }
// }

export type FormState =
| {
    errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
      repeat_password?: string[]
    }
    message?: string
  }
| undefined


export async function signinSubmit(state: FormState, formData: FormData, locale: Locale) {
  try{
    // get locale from url
    // const { nextUrl } = request;
    // const locale = nextUrl.locale;
    console.log('State', NextResponse)

    const validatedFields = SignInSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password')
    })

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
    const { email, password } = validatedFields.data;
    console.log('SIGN IN ', locale + DEFAULT_LOGIN_REDIRECT)
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/' + locale + DEFAULT_LOGIN_REDIRECT,
    })

    // const user = await getUserByEmail(email as string);
    // if(!user.length) {
    //   return {
    //     errors: {
    //       email: ['error.signin.invalid'],
    //     },
    //   }
    // }
    //
    // const userPassword = user[0].password;
    // const match = await bcrypt.compare(password as string, userPassword);
    // if(!match) {
    //   return {
    //     errors: {
    //       email: ['error.signin.invalid'],
    //       password: ['error.signin.invalid']
    //     },
    //   }
    // }

    // return {
    //   errors: {},
    //   message: 'User signed in'
    // }

  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            errors: {
              email: ['error.signin.invalid'],
              password: ['error.signin.invalid']
            },
          }
        default:
          return {
            errors: {
              email: ['error.signin.error'],
            },
          }
      }
    }

    throw error
  }
}


export async function signupSubmit(state: FormState, formData: FormData) {
  console.log('formData', formData)
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
    repeat_password: formData.get('repeat_password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const { email, password, name, repeat_password } = validatedFields.data;

  if (password !== repeat_password) {
    return {
      errors: {
        repeat_password: ['Passwords do not match'],
      },
    }
  }

  const user = await getUserByEmail(email)

  if(user.length) {
    return {
      errors: {
        email: ['Email already in use'],
      },
    }
  }
  const hashedPassword = await hashPassword(password);

  const newUser = await createUser(email, name, hashedPassword);
  console.log('newUser', newUser)

  return {
    message: 'User created'
  }
}

const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcryptjs.hash(password, saltRounds);
}