import {PropsWithChildren, ReactNode} from "react";

export const Wrapper = ({ children, className = '', small = false }:Props) => {
  let cn = 'max-w-[1200px] m-auto px-6 ';
  if(small) cn += ' max-w-[800px] ';
  if(className) cn += className;

  return(
    <div className={cn}>
      {children}
    </div>
  )
}


type Props = {
  children: ReactNode,
  className?: string,
  small?: boolean,
}