import React, { useRef } from "react";
import * as S from "./styles"
import Book from "./icons/Education.svg"
import Lixo from "./icons/lixo.svg"
import Bus from "./icons/Bus.svg"
import Oil from "./icons/Oil.svg"
export default function OnuPage() {
  const data = [
    {
      number: 1,
      title: "Limpeza das ruas",
      img: Lixo,
    },
    {
      number: 2,
      title: "Educação de qualidade",
      img: Book,
    },
    {
      number: 3,
      title: "Indústria,Inovação e Infraestrutura",
      img: Oil,
    },
    {
      number: 4,
      title: "Melhora na infraestrutura de transporte intermunicipal",
      img: Bus,
    },
  ]
  const manipularCor = useRef()
  const handleCor = () => {
    manipularCor.current.style.backgroundColor = "blue"
  }
  return (
    <S.Container>
      <S.Title>Os Objetivos de Desenvolvimento Sustentável no meu bairro</S.Title>
      <S.Paragraph>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.Paragraph>
      <S.Mural>
        {
          data.map((item) => (
            <S.Box ref={manipularCor} >
              <article>
                <h2>{item.number}</h2>
                <h3>{item.title}</h3>
              </article>
              <img src={item.img} alt={item.title} />

            </S.Box>
          ))}

      </S.Mural>
    </S.Container>
  )
}