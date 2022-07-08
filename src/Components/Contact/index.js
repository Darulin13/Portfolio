import React from "react";
import * as S from "./styles"


export default function Contact() {
    const Social = () => {
        return (
            <S.Container id="Contact">
                <S.Title>Contact</S.Title>
                <S.Div>
                    <S.Icon href="https://www.linkedin.com/in/jo%C3%A3o-pedro-f-76981620a/" target="_blank"> <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1657286445~hmac=70f4068385b46fca507b197e33cc926e" alt="Linkedin icon" />  </S.Icon>
                    <S.Icon href="https://github.com/Darulin13" target="_blank"> <img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1657286753~hmac=38e6eb79d635b77c0e749b4e84042a8b" alt="Github icon" />  </S.Icon>
                </S.Div>

            </S.Container>
        )
    }
    return (
        <>
            {Social()}
        </>
    )
}