import {ReactNode} from "react";

export const P = ({ children, className = '' }:Props) => {
  const cn = 'text-lg font-bold my-2 ' + className;

  return(
    <p className={cn}>
      {children}
    </p>
  )
}

type Props = {
  children: ReactNode,
  className?: string
}