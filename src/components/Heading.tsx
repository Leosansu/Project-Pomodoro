
import stilo from './Heading.module.css'
export function Heading(props) {
  return <h1 className={stilo.heading} >{props.children}</h1>

  
  
}
