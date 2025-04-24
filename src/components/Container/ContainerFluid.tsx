import styles from './ContainerFluid.module.css';


type ContainerFluidProps = {
    children: React.ReactNode; //React.ReactNode é tudo que o react aceita como tipo
};

export function ContainerFluid({ children }: ContainerFluidProps) {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section>
                    {children}

                </section>
            </div>
        </div>
    );
}