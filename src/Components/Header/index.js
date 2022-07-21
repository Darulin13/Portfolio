import React from "react";
import * as S from "./styles"
import { Link } from "react-scroll";

export default function Header() {
    const NavegationPage = () => {
        const linkStyle = {

            width: "100%"
        }
        const linkStyleImg = {
            width: "5%",
         
            

            

        }
     
        return (
            <S.NavBar>
                <S.Logo>
                    <h1>Bem vindo   </h1>
                </S.Logo>
                <S.Ul>
                    <S.Li>  <Link to="Project" style={linkStyle} smooth={true}>Projetos</Link> </S.Li>
                    <S.Li > <Link to="About" style={linkStyle} smooth={true}>Sobre</Link></S.Li>
                    <S.Li> <Link to="Contact" style={linkStyle} smooth={true}>Contato</Link></S.Li>
                 
                </S.Ul>
                <S.Hamb src="https://cdn-icons.flaticon.com/png/512/5358/premium/5358649.png?token=exp=1658426916~hmac=bfe44137eb18ed7a7bd4c4f5d2d45b1f" alt="menu hamburguer"/>
                <Link to="About" style={linkStyleImg}     smooth={true} >  <S.Seta src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="Seta" /> </Link>

            </S.NavBar>
        )

    }
    return (
        <S.Component>
            {NavegationPage()}
        </S.Component>
    )
}