import { Timer } from 'lucide-react'
import stilo from './styles.module.css'

/*type LogoProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}*/

export function Logo() {
  return <div className={stilo.logo}>
    <a className={stilo.logoLink} href='#'>
      <Timer />
      <span>Chronos</span>
    </a>
  </div>
}


/*export function Logo(props: LogoProps) {
  return <h1 className={stilo.Logo} >{props.children}</h1>  
  
}*/