import styles from './css/header.module.css'

function Header(){
    return(
        <section className={styles.header}>
            <span id={styles.textMain}>
                <h1 id={styles.h1Main}>Lanchonete</h1>
                <p id={styles.pMain}>Finge pfv que tem algum texto coerente aqui</p>
            </span>
        </section>
    )
}

export default Header
