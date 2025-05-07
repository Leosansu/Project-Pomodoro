import Stilos from './styles.module.css';

export function Ciclos() {
  return (
    <div className={Stilos.ciclos}>
        <span>Ciclo: </span>
        <div className={Stilos.pontosDoClico}>
            <span className={`${Stilos.pontoDoClico} ${Stilos.tempoDeTrabalho} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.curtoIntervalo} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.tempoDeTrabalho} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.curtoIntervalo} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.tempoDeTrabalho} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.curtoIntervalo} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.tempoDeTrabalho} `}></span>
            <span className={`${Stilos.pontoDoClico} ${Stilos.longoIntervalo} `}></span>
        </div>
    </div>
  );
}