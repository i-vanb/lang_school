import ThemeSwitch from "@/components/ui/ThemeSwith";
import Image from "next/image";
import LocaleSwitcher from "@/components/ui/LangSwitch";
import {Locale} from "@/i18n.config";

import {Wrapper} from "@/app/layouts/Wrapper";
import {Logo} from "@/components/ui/Logo";

import {auth} from "@/auth";
import {ProfileMenu} from "@/components/ui/header/profile.menu";
import {SignIn} from "@/components/auth/signin-button";

export const Header = async ({lang}: { lang: Locale }) => {
  const session = await auth();

  return (
    <header className="header sticky flex top-0 z-20 h-[80px]">
      <Wrapper className="flex-1">
        <div className="flex items-center justify-between flex-wrap gap-y-6 ">
          <div>
            <Logo />
          </div>
          <div className="flex flex-col-reverse gap-4 sm:gap-12 sm:flex-row">
            <LocaleSwitcher lang={lang}/>
            <div className="flex gap-4 sm:gap-12">
              <ThemeSwitch/>
              {session
                ? <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center">
                      <DiamondIcon/>
                      <span className="text-xs">50</span>
                    </div>
                    <ProfileMenu lang={lang} user={session.user}/>
                  </div>
                : <SignIn lang={lang}/>
              }
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}


const DiamondIcon = () => {
  return (
    <svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <polygon fill="#eccff7" points="256,499.47 512,146.167 414.217,12.53 97.784,12.53 0.001,146.167 "/>
        <g>
          <polygon fill="#d98be9" points="97.786,12.53 170.663,146.172 0,146.172 "/>
          <polygon fill="#d98be9" points="414.217,12.53 341.327,146.172 255.995,12.53 "/>
          <polygon fill="#d98be9" points="341.327,146.172 255.995,499.467 170.663,146.172 "/>
        </g>
        <g>
          <polygon fill="#c072cb" points="414.217,12.53 511.99,146.172 341.327,146.172 "/>
          <polygon fill="#c072cb" points="255.995,12.53 341.327,146.172 170.663,146.172 "/>
          <polygon fill="#c072cb" points="170.663,146.172 255.995,499.467 0,146.172 "/>
        </g>
      </g>
    </svg>
  )
}