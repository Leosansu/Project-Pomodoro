import { House } from 'lucide-react'
import { Settings } from 'lucide-react'
import { History } from 'lucide-react'
import { SunMoon } from 'lucide-react'
import stilo from './styles.module.css'

/*type logoProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}*/

export function Menu() {
  return <nav className={stilo.menu}>
    <a className={stilo.menuLink} href='#'>
      <House />
      <span>Home</span>
    </a>

    <a className={stilo.menuLink} href='#'>
      <History />
      <span>Hist</span>
    </a>

    <a className={stilo.menuLink} href='#'>
      <Settings />
      <span>Config</span>
    </a>

    <a className={stilo.menuLink} href='#'>
      <SunMoon />
      <span>Notur/Diur</span>
    </a>
  </nav>
}


/*export function Menu(props: MenuProps) {
  return <h1 className={stilo.Menu} >{props.children}</h1>  
  
}*/