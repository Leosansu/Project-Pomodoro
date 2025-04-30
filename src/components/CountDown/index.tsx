
import stilo from './styles.module.css'

/*type LogoProps = {
  children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
}*/

export function CountDown() {
  return <div className={stilo.countainer}> 00:00 </div>
}


/*export function Logo(props: LogoProps) {
  return <h1 className={stilo.Logo} >{props.children}</h1>  
  
}*/