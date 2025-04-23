
import stilo from './Heading.module.css'

type HeadingProps = {
  children: string;
  attr?: number;
  attr2?: string;
}
export function Heading({ children }: HeadingProps) {
  return <h1 className={stilo.heading}>{children}</h1>
}


/*export function Heading(props: HeadingProps) {
  return <h1 className={stilo.heading} >{props.children}</h1>  
  
}*/
