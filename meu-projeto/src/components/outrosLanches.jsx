import { useState } from 'react'
import styles from './css/outrosLanches.module.css'

function BotoesLanches(){

    const [lanche01, setLanche01] = useState(true)
    const [lanche02, setLanche02] = useState(false)
    const [lanche03, setLanche03] = useState(false)

    function inicialConfig(){
        if (lanche01){
            const botao1L_ = document.getElementById('botao01')
            botao1L_.style.backgroundColor = "#cf881d"
        }
    }

    function destacar(id){
        const botao1 = document.getElementById('botao01')
        const botao2 = document.getElementById('botao02')
        const botao3_ = document.getElementById('botao03')
        
        botao1.style.backgroundColor = "rgb(224, 224, 224)"
        botao2.style.backgroundColor = "rgb(224, 224, 224)"
        botao3_.style.backgroundColor = "rgb(224, 224, 224)"

        switch(id){
            case 1:
                botao1.style.backgroundColor = "#cf881d"
                break
            case 2:
                botao2.style.backgroundColor = "#cf881d"
                break
            case 3:
                botao3_.style.backgroundColor = "#cf881d"
                break
        }
    }

    function trocarLanche(id){
        setLanche01(false)
        setLanche02(false)
        setLanche03(false)

        switch(id){
            case 1:
                setLanche01(true)
                break
            case 2:
                setLanche02(true)
                break
            case 3:
                setLanche03(true)
                break
        }
        destacar(id)
    }

    const imagemHamburguer = require('../img/hamburguer.jpg');

    return(
        <div id={styles.divgeral}>
            <nav className={styles.navBotoes}>
                <input className={styles.botoes} style={{backgroundColor:'#cf881d'}} id='botao01' type="button" value="Lanche 01" onClick={()=>{trocarLanche(1)}}/>
                <input className={styles.botoes} id='botao02' type="button" value="Lanche 02" onClick={()=>{trocarLanche(2)}}/>
                <input className={styles.botoes} id='botao03' type="button" value="Lanche 03" onClick={()=>{trocarLanche(3)}}/>
            </nav>

            {lanche01 &&(
                <section className={styles.sectionLanche}>
                    <div className={styles.resumoLanche}>
                        <h1 className={styles.nomeLanche}>Hamburguer</h1>
                        <p className={styles.descricaoLanche}>Delicie-se com a explosão de sabores do nosso irresistível hambúrguer premium! <br /><br />Uma suculenta carne grelhada no ponto perfeito, envolta em queijo derretido e complementada por crocantes folhas de alface e tomate fresco. Nossa especialidade é a combinação perfeita de ingredientes que vai conquistar seu paladar.  <br /><br />Experimente o prazer de cada mordida no nosso hamburguer saboroso e transforme seu momento em uma experiência única!</p>
                    </div>

                    <div className={styles.imagemLanche} style={{backgroundImage: `url(${imagemHamburguer})`}} id={styles.imagemLanche01}></div>
                </section>

            )}

            {lanche02 &&(
                <section className={styles.sectionLanche}>
                    <div className={styles.resumoLanche}>
                        <h1 className={styles.nomeLanche}>Coxinha</h1>
                        <p className={styles.descricaoLanche}>Descubra o êxtase do sabor em cada pedaço da nossa coxinha artesanal! <br /><br />Uma crosta dourada e crocante esconde o recheio cremoso de frango desfiado, temperado com ingredientes selecionados. <br /><br />Cada mordida é uma explosão de sabores que despertará seus sentidos. Satisfaça seus desejos com a coxinha perfeita – um deleite irresistível que eleva o prazer gastronômico a outro nível!</p>
                    </div>

                    <div className={styles.imagemLanche} id={styles.imagemLanche02}></div>
                </section>
            )}

            {lanche03 &&(
                <section className={styles.sectionLanche}>
                    <div className={styles.resumoLanche}>
                        <h1 className={styles.nomeLanche}>Pizza</h1>
                        <p className={styles.descricaoLanche}>Viaje pelos sabores autênticos da Itália com nossa pizza excepcional! <br /><br />Uma massa fina e crocante abraça uma generosa camada de molho de tomate artesanal, coberta com queijo derretido e uma seleção cuidadosa de ingredientes frescos. <br /><br />Cada fatia é uma experiência única, combinando tradição e inovação para satisfazer os paladares mais exigentes. Deleite-se com a perfeição em cada mordida e entregue-se à magia da nossa pizza saborosa!</p>
                    </div>

                    <div className={styles.imagemLanche} id={styles.imagemLanche03}></div>
                </section>
            )}
        </div>
    )
}

export default BotoesLanches