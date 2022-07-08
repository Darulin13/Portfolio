import React from "react";
import * as S from "./styles"


export default function About() {
    const Info = () => {
        return (
            <S.Container id="About">
                <S.Title>Sobre</S.Title>
                <S.Paragraph>Sou um parágrafo. Clique aqui para editar o seu texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes para adicionar o seu conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história.
                </S.Paragraph>
            </S.Container>
        )
    }
    return (
        <>
            {Info()}
        </>
    )
}