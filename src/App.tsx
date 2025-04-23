
import { Heading } from './components/Heading';
import { FloppyDisk } from 'phosphor-react';

import './styles/tema.css';
import './styles/global.css';


// componente do react é uma função que utiliza o nome em pascal case
//ex: AppCeasa
export function App() {
  return (
    // jsx só pode ter um elemento pai
// No site lucide.dev tem uma lista de icones para usar nos botões(FloppyDisk)
    <>
      <Heading >
        Olá mundo 1
        <button>          
        <FloppyDisk /> 
        </button>
      </Heading>
      <p >
        A vida é feita de encontros — alguns nos mudam, outros nos completam.
      </p>
    </>
  );

}
