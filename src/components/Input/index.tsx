import stilo from './styles.module.css'


type InputProps = {
  id: string;
} & React.ComponentProps<'input'>;

export function Input({id,type}: InputProps) {
  return(

    <>
    <label htmlFor={id}>msg</label>
    <input id={id} type={type} />
    </>
  )
}
