

import './styles/tema.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { ContainerFluid } from './components/Container';


// componente do react é uma função que utiliza o nome em pascal case

export function App() {
  return (
    // jsx só pode ter um elemento pai
    // No site lucide.dev tem uma lista de icones para usar nos botões(FloppyDisk)
    <>

      <ContainerFluid >
        <Heading>
          Meu Título
        </Heading>
        <section>A verdadeira força, se revela em levantar da cama num dia difícil, em tentar de novo depois de uma queda em certos momentos, se reerguer mesmo que ninguém mais acredite.
          Continuar, ainda que sem aplausos ou certezas, é um ato de resistência poderosa. E é nessa persistência silenciosa que a verdadeira transformação acontece.
        </section>

      </ContainerFluid>

    </>
  );

}
