import React from "react"
import * as S from "./styles"
import Recipes from "./images/Recipes.png"
import Todoflix from "./images/Todoflix.png"
import Portflow from "./images/Portflow.png"
import vnw from "./images/vnw.png"
import Onu from "./images/onu.png"
import { Link } from "react-router-dom";
export default function Project() {
    const data =
        [
            {
                name: "Recipes",
                banner: Recipes,
            },
            {
                name: "Todoflix",
                banner: Todoflix,
            },
            {
                name: "Portflow",
                banner: Portflow,
            },
            {
                name: "vnw",
                banner: vnw,
            },
            {
                name: "",
                banner: "https://i.pinimg.com/564x/6b/17/13/6b1713430a5e40fbae0a72312b9dcfdf.jpg",
            }

        ]
    const box = () => {
        return (
            <S.Container id="Project">
                <article>
                    <S.Title>Projetos</S.Title>

                    <S.Box>
                        {
                            data.map((item) => (
                                <S.Poster src={item.banner} alt={item.name} />
                            ))
                        }

                        <Link to="/OnuPage" >
                            <S.Poster src={Onu} alt="OnuPage" />
                        </Link>

                    </S.Box>
                </article>

            </S.Container>
        )

    }
    return (
        <> {box()}</>

    )
}