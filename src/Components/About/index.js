import React from "react";
import * as S from "./styles"


export default function About() {
    const Info = () => {
        return (
            <S.Container >
                <div id="About" />
                <S.Title >Sobre</S.Title>
                <S.Paragraph>
                    Olá! Sou o João Pedro, desenvolvedor Front-end apaixonado por React e estilização. Atualmente estou cursando o <a href="https://www.vainaweb.com.br/" target="_blank"  rel="noreferrer">Vai na Web</a> e me empenhado em melhorar minhas aplicações web. Conheça mais sobre meu trabalho e estudos aqui no meu site.
                </S.Paragraph>
                <div />
            </S.Container>
        )
    }
    return (
        <>
            {Info()}
        </>
    )
}