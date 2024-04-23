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
  console.log('sessionHEADER', session)

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
                ? <ProfileMenu lang={lang}/>
                : <SignIn lang={lang}/>
              }
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
