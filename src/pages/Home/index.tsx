import '../../styles/tema.css';
import '../../styles/global.css';

import { ContainerFluid } from '../../components/Container';
import { MainTemplate } from '../../Templates/MainTemplates';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm'; 

export function Home() {

  return (
    <MainTemplate>
      
      <ContainerFluid>
        <CountDown />
      </ContainerFluid>

      <ContainerFluid>
        <MainForm />
      </ContainerFluid>

    </MainTemplate>

  );
}