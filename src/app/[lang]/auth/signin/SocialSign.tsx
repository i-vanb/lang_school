'use client'

import { signIn } from "next-auth/react";
import { FcGoogle} from "react-icons/fc";

import { MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";

export default function SocialSign() {
  const handleGoogle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    signIn('google', { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className="flex flex-1 space-x-2">
      <Button onClick={handleGoogle} className="bg-white text-black flex-1">
        <FcGoogle size={20} />
      </Button>
    </div>
  )
}