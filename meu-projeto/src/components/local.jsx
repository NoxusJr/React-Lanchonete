import { useState } from 'react'
import styles from './css/local.module.css'

export default function local(){
    return(
        <div id={styles.sectionLocal}>
            <div id={styles.imgMapa}></div>

            <div id={styles.descricaoMapa}>
                <p id={styles.localP}>Bairro Xxxxxxxxxxxx, Rua Xxxxxxx Xxxxxx, Nº500 <br /> SAC: 4002-8922</p>
                <p id={styles.textMapa}>O Melhor Lugar Para Sua Família</p>
            </div>
        </div>
    )
}