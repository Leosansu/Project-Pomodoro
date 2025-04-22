
import { Heading } from './components/Heading';

import './styles/tema.css';
import './styles/global.css';

// componente do react é uma função que utiliza o nome em pascal case
//ex: AppCeasa
export function App() {
  return (
    // jsx só pode ter um elemento pai

    <>
      <Heading/>
      <p >
        Esse é o meu primeiro projeto com ReactJS
      </p>
    </>
  );

}
