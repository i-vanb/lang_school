import Image from "next/image";
import {Locale} from "@/i18n.config";
import {Wrapper} from "@/app/layouts/Wrapper";
import {Logo} from "@/components/ui/Logo";

export const Footer = ({lang}: { lang: Locale }) => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="flex items-center justify-between py-4 ">
          <div>
            <Logo />
          </div>
          <div className="flex gap-12 text-xs sm:text-lg">
            © Rusça Tutkuyla 2024
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}