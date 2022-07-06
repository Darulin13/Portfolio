import React from "react"
import * as S from "./styles"

export default function Project() {
    const data =
        [
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg"
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            }

        ]
    const box = () => {
        return (
            <S.Container>
                <article>
                    <S.Title>Projetos</S.Title>

                    <S.Box>
                        {
                            data.map((item) => (

                                <S.Poster src={item.banner} alt={item.name} />

                            ))
                        }</S.Box>
                </article>

            </S.Container>
        )

    }
    return (
        <> {box()}</>

    )
}