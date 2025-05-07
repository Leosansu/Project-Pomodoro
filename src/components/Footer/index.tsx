import stilo from './styles.module.css'


export function Footer( ) {
  return  <footer className={ stilo.footer}>
    <a href=""> Entenda como funciona a técnica pomodoro</a>
    <a href=""> Pomodoro &copy; {new Date().getFullYear()} - feito com ❤️ </a>
  </footer>
}


/*export function Heading(props: HeadingProps) {
  return <h1 className={stilo.heading} >{props.children}</h1>  
  
}*/