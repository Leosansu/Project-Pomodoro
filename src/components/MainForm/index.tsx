import { Input } from '../Input';
import { Ciclos } from '../Ciclos';
import { BotaoPadrao } from '../BotaoPadrao';
import { CirclePlay } from 'lucide-react';



export function MainForm() {
  return (

    <form className='form' action="">
      <div className='formRow'>
        <Input 
        id="input-id" 
        msgLabel="lembrete" 
        placeholder='Digite' />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Ciclos />
      </div>

      <div className='formRow'>
        <button>Enviar</button>
        <BotaoPadrao icon={<CirclePlay />} cor='verde' />

      </div>
    </form>
  )
}