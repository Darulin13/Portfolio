import React from "react"
import * as S from "./styles"
import Recipes from "./images/Recipes.png"
import Portflow from "./images/Portflow.png"
import Onu from "./images/onu.png"
import todoflix from "./images/todoflix.png"
import { Link } from "react-router-dom";
export default function Project() {
    const data =
        [
            {
                name: "Recipes",
                banner: Recipes,
                link: "https://recipessite.netlify.app/",
            },
            {
                name: "Dog Generator",
                banner: "https://www.programmableweb.com/sites/default/files/dogceo_0.jpg",
                link: "https://dogshow-api.netlify.app/",
            },
            {
                name: "Portflow",
                banner: Portflow,
                link: "https://portflow-site.netlify.app/",
            },
            {
                name: "Persona Desktop",
                banner: "https://meups.com.br/wp-content/uploads/2022/06/Persona-5-Royal.jpg",
                link: "https://csb-xuccj.netlify.app/",
            },
            {
                name: "ULOAX",
                banner: "https://i.pinimg.com/originals/ed/0e/a8/ed0ea8456bdbd5c74aae8d777f4841ce.jpg",
                link: "https://inspiring-shaw-52512e.netlify.app/",
            },
            {
                name: "Todoflix",
                banner:todoflix,
                link: "https://todoflix.netlify.app/",
            },
            {
                name: "Rick and Morty",
                banner: "https://images.ctfassets.net/t11jt6iul2n5/ys4KvcRUjeig0cC2yk6yO/dd17c10d46b207d2d30d7dd0a1d597f1/rickmorty.jpeg?w=960&h=533&fl=progressive&q=50&fm=jpg",
                link: "https://rick-and-morty-api-site.netlify.app/",
            },
            {
                name: "Movie Database",
                banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDr6uAkqVh2OWwZ8OqM8wSy56Rvgraxa03CzVIyECdiTPb2YkzmrTYnO9XAsH_Xl-cOEA&usqp=CAU",
                link: "https://database-clone.netlify.app/",
            },
            {
                name: "Estudio Ghibli",
                banner: "https://ghibliapi.herokuapp.com/images/logo.svg",
                link: "https://estudio-ghibli.netlify.app/",
            },



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