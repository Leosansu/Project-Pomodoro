import { History,SunMoon,Settings,House } from 'lucide-react'
import stilo from './styles.module.css'
import { useEffect, useState } from 'react'

/*type logoProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}*/
type temasDisponiveis = 'diurno' | 'noturno' //definindo os tipos de temas disponíveis

export function Menu() {
  const[tema, setTema] = useState<temasDisponiveis >('noturno')

  function alternarTema( evento:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evento.preventDefault() // Previne que o navegador siga o link definido no atributo href="#
    setTema(tema === 'noturno' ? 'diurno' : 'noturno'); // Alterna o tema
    console.log('Clicado no darkButton:', tema)
  }
  useEffect(() => {    
    document.documentElement.setAttribute('data-theme', tema);//

  },[tema]) //Só executa quando o valor de tema mudar


  return <nav className={stilo.menu}>

    <h1>{tema}</h1>
    

    <a className={stilo.menuLink} href='#'
      title='Ir para Home'
      aria-label='Home'
      >
      <House />
      
    </a>

    <a className={stilo.menuLink} href='#'
      title='Histórico'
      aria-label='Histórico'>
      <History />
      
    </a>

    <a className={stilo.menuLink} href='#'
      title='Configurações'
      aria-label='Configurações'>
      <Settings />
      
    </a>

    <a className={stilo.menuLink} href='#'
      title='Tema noturno/diurno'
      aria-label='Alterar tema'
      onClick={alternarTema}>
      <SunMoon />
      
    </a>
  </nav>
}


/*export function Menu(props: MenuProps) {
  return <h1 className={stilo.Menu} >{props.children}</h1>  
  
}*/