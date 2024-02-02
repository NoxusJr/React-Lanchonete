import styles from './css/principal.module.css'

function Principal(){
    return (
        <section className={styles.mainFood}>
            <div id={styles.mainFoodDescricao}>
                <h1 id={styles.h1Comida}>Comida</h1>
                <p id={styles.pComida}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid atque ab excepturi quae illum amet, totam optio molestiae perferendis dolorem fuga a nulla quaerat, facere quibusdam officia mollitia cumque?</p>
            </div>

            <div id={styles.mainFoodImage}></div>
        </section>
    )
}

export default Principal