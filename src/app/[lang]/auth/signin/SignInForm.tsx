'use client'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FormState, signinSubmit, signupSubmit} from "@/lib/actions";
import {useFormState, useFormStatus} from "react-dom";
import {useEffect, useState} from "react";
import {formError} from "@/app/[lang]/auth/utils";
import {Locale} from "@/i18n.config";
import SocialSign from "@/app/[lang]/auth/signin/SocialSign";


export default function SignInForm({dictionary, locale}: { dictionary: any, locale: Locale }) {
  const [state, action] = useFormState((state: FormState, formData: FormData) => signinSubmit(state, formData, locale), undefined)

  const [isEmailShowErr, setIsEmailShowErr] = useState(false);
  const [isPswShowErr, setIsPswShowErr] = useState(false);

  useEffect(()=>{
    if(state?.errors) {
      if(state.errors.email) setIsEmailShowErr(true);
      if(state.errors.password) setIsPswShowErr(true);
    }
  }, [state])

  const resetError = (name:string) => {
    switch (name) {
      case 'email':
        if(isEmailShowErr) setIsEmailShowErr(false);
        break;
      case 'password':
        if(isPswShowErr) setIsPswShowErr(false);
        break;
    }
  }

  const getInputClassName = (isError:boolean) => {
    return isError ? 'border-red-500' : '';
  }

  return (
    <div className="absolute h-screen w-full inset-0 flex items-center justify-center bg-background">
      <div className="shadow-neon rounded-md">
        <Card>
          <form action={action}>
            <CardHeader>
              <CardTitle>
                {dictionary.signin.title}
              </CardTitle>
              <CardDescription>
                {dictionary.signin.signupRedirect} <Link className="text-violet-600 underline"
                                                        href="/auth/signup">{dictionary.signin.signupLink}</Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2 relative pb-4">
                <Label htmlFor="email">{dictionary.emailTitle}</Label>
                <Input id="email" name="email" type="text"
                       className={getInputClassName(!!(isEmailShowErr && state?.errors?.email))}
                       placeholder={dictionary.emailPlaceholder} onChange={()=>resetError('email')}
                />
                {isEmailShowErr && state?.errors?.email &&
                    <p className="absolute bottom-0 text-xs text-red-500">
                      {formError(state.errors.email[0], dictionary)}
                    </p>
                }
              </div>
              <div className="space-y-2 relative pb-4">
                <Label htmlFor="password">
                  <div className="flex justify-between">
                    <span>{dictionary.passwordTitle}</span>
                  </div>
                </Label>
                <PasswordInput className={getInputClassName(!!(isPswShowErr && state?.errors?.password))}
                               id="password" name="password" placeholder={dictionary.passwordPlaceholder}
                               onChange={()=>resetError('password')}
                />
                {isPswShowErr && state?.errors?.password &&
                    <p className="absolute bottom-0 text-xs text-red-500">
                      {formError(state.errors.password[0], dictionary)}
                    </p>
                }
              </div>
            </CardContent>
            <CardFooter className="justify-between gap-5">
              <SubmitButton  dictionary={dictionary.signin} />
              <SocialSign />
            </CardFooter>

          </form>
        </Card>
      </div>
    </div>
  )
}

const SubmitButton = ({dictionary}:any) => {
  const {pending} = useFormStatus();

  return(
    <Button className="flex-1" type="submit" aria-disabled={pending}>{
      pending ? dictionary.submitProcessing : dictionary.submit
    }</Button>
  )
}