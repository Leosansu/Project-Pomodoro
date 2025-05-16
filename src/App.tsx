

import './styles/tema.css';
import './styles/global.css';
import { ContainerFluid } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Ciclos } from './components/Ciclos';
import { BotaoPadrao } from './components/BotaoPadrao';
import { CirclePlay } from 'lucide-react';
import { Footer } from './components/Footer';


// componente do react é uma função que utiliza o nome em pascal case

export function App() {  

  

  return (
    <>     
      

      <ContainerFluid>
        <Logo />
       
      </ContainerFluid>

      <ContainerFluid>
        <Menu />
      </ContainerFluid>

      <ContainerFluid>
        <CountDown />
      </ContainerFluid>

      <ContainerFluid>
        <form className='form' action="">
          <div className='formRow'>
            <Input id="input-id" msgLabel="lembrete" placeholder='Digite' />
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
      </ContainerFluid>

      <ContainerFluid>
        <Footer />
      </ContainerFluid>
    </>
  );
}