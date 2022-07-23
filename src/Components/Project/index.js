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
                link: "https://62d99fe582aea000aedad520--voluble-snickerdoodle-338ddf.netlify.app/",
            },
            {
                name: "Todoflix",
                banner: Todoflix,
                link: "https://inspiring-shaw-52512e.netlify.app/",
            },
            {
                name: "Portflow",
                banner: Portflow,
                link: "https://darulin13.github.io/Portflow/",
            },
            {
                name: "Vai na Web Blog",
                banner: vnw,
                link: "https://inspiring-shaw-52512e.netlify.app/",
            },
            {
                name: "ULOAX",
                banner: "https://media.graphassets.com/r5mCq8mCSwS3DRcHhzFW",
                link: "https://inspiring-shaw-52512e.netlify.app/",
            }

        ]
    const linkStyle = {
        textDecoration: "none",

    };
    const box = () => {
        return (
            <S.Container id="Project">
                <article>
                    <S.Title>Projetos</S.Title>

                    <S.Box>
                        {
                            data.map((item) => (

                                <S.Div href={item.link} target="_blank">
                                    <S.Poster src={item.banner} alt={item.name} />
                                    <h2>{item.name} </h2>
                                </S.Div>

                            ))
                        }

                        <Link style={linkStyle} to="/OnuPage" >
                            <S.Poster src={Onu} alt="OnuPage" />
                            <S.H2>Onu Page </S.H2>
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