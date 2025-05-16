import { History, SunMoon, Settings, House, Moon, Sun } from 'lucide-react'
import stilo from './styles.module.css'
import { useEffect, useState } from 'react'

/*type logoProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}*/
// type temasDisponiveis = 'diurno' | 'noturno' 

// export function Menu() {
//   const[tema, setTema] = useState<temasDisponiveis >('noturno')

type temasDisponiveis = 'diurno' | 'noturno';

export function Menu() {
  const [tema, setTema] = useState<temasDisponiveis>(() => {
    // Busca o tema salvo no localStorage ou usa 'noturno' como padrão
    return (localStorage.getItem('tema') as temasDisponiveis) || 'noturno';
  });
  
  const iconeAlteraTema = {
    diurno: <Moon />,
    noturno: <Sun />, 
  };

  function alternarTema( evento:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evento.preventDefault() 
    setTema(tema === 'noturno' ? 'diurno' : 'noturno'); 
    
  }
  useEffect(() => {    
    document.documentElement.setAttribute('data-theme', tema);//
    localStorage.setItem('tema', tema) 

  },[tema]) 

  

  return <nav className={stilo.menu}>
    

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
      {iconeAlteraTema[tema]}
      
    </a>
  </nav>
}


/*export function Menu(props: MenuProps) {
  return <h1 className={stilo.Menu} >{props.children}</h1>  
  
}*/