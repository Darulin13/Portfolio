import React from "react";
import * as S from "./styles"


export default function Contact() {
    const Social = () => {
        return (
            <S.Container id="Contact">
                <S.Title>Contact me</S.Title>
                <S.Form>
                    <label>Name*</label>
                    <S.Name required type="text" />
                    <label>Email*</label>
                    <S.Email required type="e-mail" />
                    <label>Message*</label>
                    <S.Message required type="text" />
                    <S.Div>
                        <S.Button>Send</S.Button>
                        <S.Icon href="https://www.linkedin.com/in/jo%C3%A3o-pedro-f-76981620a/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="Linkedin icon" />  </S.Icon>
                        <S.Icon href="https://github.com/Darulin13" target="_blank"> <img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1657915435~hmac=6ee77e668b262b90c458f4fbf796e69e" alt="Github icon" />  </S.Icon>
                    </S.Div>
                </S.Form>
            </S.Container>
        )
    }
    return (
        <>
            {Social()}
        </>
    )
}