import styles from './css/principal.module.css'

function Principal(){
    return (
        <section className={styles.mainFood}>
            <div id={styles.mainFoodDescricao}>
                <h1 id={styles.h1Comida}>Super Combo</h1>
                <p id={styles.pComida}>Desfrute de uma experiência gastronômica única com nosso Combo Duplo de Hamburguers, incluindo o clássico e o gourmet, acompanhados de batatas fritas. Complete sua refeição com dois refrigerantes refrescantes à sua escolha. Qualidade premium, variedade de sabores e economia em cada mordida. Faça seu pedido agora e aproveite este banquete delicioso!</p>
            </div>

            <div id={styles.mainFoodImage}></div>
        </section>
    )
}

export default Principal