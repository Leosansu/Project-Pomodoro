import './styles/tema.css';
import './styles/global.css';

import { ContainerFluid } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';


type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({children}: MainTemplateProps) {    

  return (
    <>           

      <ContainerFluid>
        <Logo />
       
      </ContainerFluid>

      <ContainerFluid>
        <Menu />
      </ContainerFluid>

      {children}

      <ContainerFluid>
        <Footer />
      </ContainerFluid>
    </>
  );
}