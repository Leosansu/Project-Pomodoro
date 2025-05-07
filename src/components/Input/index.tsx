import stilo from './styles.module.css'


type InputProps = {
  id: string;
  msgLabel: string;
} & React.ComponentProps<'input'>;

export function Input({
  id,
  type,
  msgLabel, 
  ...rest}: InputProps) {
  return(

    <>
    <label htmlFor={id}>{msgLabel}</label>
    
    <input className = {stilo.Input} id={id} type={type}{...rest} />
    </>
  )
}
