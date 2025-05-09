

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
    // jsx só pode ter um elemento pai
    // No site lucide.dev tem uma lista de icones para usar nos botões(FloppyDisk)
    <>

      <ContainerFluid >
        <Logo />
        <section>A verdadeira força, se revela em levantar da cama num dia difícil, em tentar de novo depois de uma queda em certos momentos, se reerguer mesmo que ninguém mais acredite.
          Continuar, ainda que sem aplausos ou certezas, é um ato de resistência poderosa. E é nessa persistência silenciosa que a verdadeira transformação acontece.
        </section>
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
            <Input id="input-id"
              msgLabel="lembrete"
              placeholder='Digite'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Ciclos />
          </div>

          <div className='formRow'>
            <button>Enviar</button>          
          <BotaoPadrao icon = {<CirclePlay />} cor='verde' />   
          <BotaoPadrao icon = {<CirclePlay />} cor='vermelho' />     
          </div>

        </form>
      </ContainerFluid>
      <ContainerFluid>
        <Footer/>
      </ContainerFluid>

    </>
  );

}
