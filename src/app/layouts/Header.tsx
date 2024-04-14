import ThemeSwitch from "@/app/components/ThemeSwith";
import Image from "next/image";
import LocaleSwitcher from "@/app/components/LangSwitch";
import {Locale} from "@/i18n.config";
import {SignButton} from "@/app/components/SignButton";
import {Wrapper} from "@/app/layouts/Wrapper";
import {Logo} from "@/app/components/Logo";

export const Header = ({lang}: { lang: Locale }) => {


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
              <SignButton lang={lang}/>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
}