import React from "react";
import * as S from "./styles"

export default function Header (){
    const NavegationPage = ()=>{
        return(
            <S.NavBar>
                <S.Logo> JP </S.Logo>
                <S.Ul>
                    <S.Li>Projetos</S.Li>
                    <S.Li>Sobre</S.Li>
                    <S.Li>Contato</S.Li>
                </S.Ul>
                <S.Seta src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="Seta"/>
            </S.NavBar>
        )

    } 
    return(
        <S.Component>
            {NavegationPage()}
        </S.Component>
    )
}