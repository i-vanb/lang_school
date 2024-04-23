'use client'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signupSubmit} from "@/lib/actions";
import {useFormState, useFormStatus} from "react-dom";
import {useEffect, useState} from "react";
import {formError} from "@/app/[lang]/auth/utils";


export default function SignUpForm({dictionary}: { dictionary: any }) {
  const [state, action] = useFormState(signupSubmit, undefined)

  const [isNameShowErr, setIsNameShowErr] = useState(false);
  const [isEmailShowErr, setIsEmailShowErr] = useState(false);
  const [isPswShowErr, setIsPswShowErr] = useState(false);

  useEffect(()=>{
    if(state?.errors) {
      if(state.errors.name) setIsNameShowErr(true);
      if(state.errors.email) setIsEmailShowErr(true);
      if(state.errors.password || state.errors.repeat_password) setIsPswShowErr(true);
    }
  }, [state])

  const resetError = (name:string) => {
    switch (name) {
      case 'name':
        if(isNameShowErr) setIsNameShowErr(false);
        break;
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
                {dictionary.signup.title}
              </CardTitle>
              <CardDescription>
                {dictionary.signup.loginRedirect} <Link className="text-violet-600 underline"
                                                        href="/auth/login">{dictionary.signup.loginLink}</Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2 relative pb-4">
                <Label htmlFor="name">{dictionary.signup.nameTitle}</Label>
                <Input id="name" name="name" type="name"
                       className={getInputClassName(!!(isNameShowErr && state?.errors?.name))}
                       placeholder={dictionary.signup.namePlaceholder}
                       onChange={()=>resetError('name')}
                />
                {isNameShowErr && state?.errors?.name &&
                    <p className="absolute bottom-0 text-xs text-red-500">
                      {formError(state.errors.name[0], dictionary)}
                    </p>
                }
              </div>
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
              <div className="space-y-2 relative pb-4">
                <Label htmlFor="password">
                  <div className="flex justify-between">
                    <span>Password confirmation</span>
                  </div>
                </Label>
                <PasswordInput className={getInputClassName(!!(isPswShowErr && state?.errors?.repeat_password))}
                               id="password_repeat" name="repeat_password"
                               placeholder={dictionary.signup.confirmPasswordPlaceholder}
                               onChange={()=>resetError('password')}
                />
                {isPswShowErr && state?.errors?.repeat_password &&
                    <p className="absolute bottom-0 text-xs text-red-500">
                      {formError(state.errors.repeat_password[0], dictionary)}
                    </p>
                }
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton dictionary={dictionary.signup} />
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
    <Button type="submit" aria-disabled={pending}>{
      pending ? dictionary.submitProcessing : dictionary.submit
    }</Button>
  )
}