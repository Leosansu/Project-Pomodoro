import estilo from './styles.module.css'


type BotaoPadraoProps = {
  icon: React.ReactNode;
  cor ?: 'verde' | 'vermelho' ;
} & React.ComponentProps<'button'>;

export function BotaoPadrao({ icon,cor = 'verde' ,...props }: BotaoPadraoProps) {
  return (

    <>

      <button className={`${estilo.botao} ${estilo[cor]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
