
import stilo from './Heading.module.css'

type HeadingProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}
export function Heading({ children }: HeadingProps) {
  return <h1 className={stilo.heading}>{children}</h1>
}


/*export function Heading(props: HeadingProps) {
  return <h1 className={stilo.heading} >{props.children}</h1>  
  
}*/
