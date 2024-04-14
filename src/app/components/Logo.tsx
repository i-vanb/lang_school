import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return(
    <Link href={'/'}>
      <Image src="/images/logo.png" alt="Logo" width={100} height={100}/>
    </Link>
  )
}