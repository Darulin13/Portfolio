import React from "react";
import * as S from "./styles"
import { Link } from "react-scroll";

export default function Header (){
    const NavegationPage = ()=>{
        const linkStyle = {
            border: "solid",
            width:"5%"
        
        };
        return(
            <S.NavBar>
                <S.Logo> JP </S.Logo>
                <S.Ul>
                    <S.Li>Projetos</S.Li>
                    <S.Li>Sobre</S.Li>
                    <S.Li>Contato</S.Li>
                </S.Ul>
                <Link to="Project" style={linkStyle} >  <S.Seta src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="Seta"/> </Link>
               
            </S.NavBar>
        )

    } 
    return(
        <S.Component>
            {NavegationPage()}
        </S.Component>
    )
}