import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles"
import Book from "./icons/Education.svg"
import Lixo from "./icons/lixo.svg"
import Bus from "./icons/Bus.svg"
import Oil from "./icons/Oil.svg"

import { Link } from "react-router-dom";



export default function OnuPage(props) {
  const data = [
    {
      id: 1,
      number: 1,
      title: "Limpeza das ruas",
      img: Lixo,
      objetivo: "Objetivo 1. Instaurar uma gestão consciente do descarte de lixo",
      phase1: "1.1 Criar programas de conscientização sobre como fazer o descarte correto de lixo",
      phase2: "1.2 Instalar Lixeiras seletivas pelo bairro",
      phase3: "1.3 Responsabilizar bares e demais comércios de entreterimento pelo descarte indevido",
      phase4: "1.4 Ampliar os postos de coleta seletiva no bairro",
    },
    {
      id: 2,
      number: 2,
      title: "Educação de qualidade",
      img: Book,
      objetivo: "Objetivo 2. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos",
      phase1: "1.1 Garantir que todos as meninas e meninos tenham acesso a um desenvolvimento de qualidade na primeira infância, cuidados e educação pré-escolar, de modo que eles estejam prontos para o ensino primário",
      phase2: "1.2 Proporcionar um aumento no salário de professores, assim incentivando os profissionais de ensino trazendo salários proporcionais a alta carga de trabalho nas escolas ",
      phase3: "1.3 Criar um ambiente mais plural e de incentivo ao aluno, guiando-o para uma visão de vida além da escola",
      phase4: "1.4 Fiscalizar a evasão escolar,",
    },
    {
      id: 3,
      number: 3,
      title: "Indústria,Inovação e Infraestrutura",
      img: Oil,
      objetivo: "Objetivo 3. Promover a expansão da indústria no bairro de forma organizada e planejada",
      phase1: "1.1 Incentivar a entrada de empresas e industrias no bairro, aumentando a oferta de emprego",
      phase2: "1.2 Desburocratizar a abertura de empresas locais",
      phase3: "1.3 Implementação de construções voltadas a arquitetura planejada do bairro",
      phase4: "1.4  Fiscalização de construções, visando uma indústria ambientalmente amigável",
    },
    {
      id: 4,
      number: 4,
      title: "Melhora na infraestrutura de transporte intermunicipal",
      img: Bus,
      objetivo: "Objetivo 4. Promover uma linha de transporte intermunicipal barata,rápida e eficiente",
      phase1: "1.1 Aumentar a disponibilidade de ônibus intermunicipais, principalmente no turno da noite",
      phase2: "1.2 Implementação de BRTs em vias intermunicipais, visando a migração pendular sentido centro ",
      phase3: "1.3 Aumentar a segurança em ônibus via Fiscalização ",
      phase4: "1.4 Automatizar funções de pagamento em ônibus, implementando transações monetárias via internet e débito automático em conta ",
    },
  ]

  //Info Modal
  const [info, setInfo] = useState([])
  const [listInfo, setlistInfo] = useState([])
  //Abrir Modal
  const Modal = (id) => {
    
      setInfo(data.filter((item) => item === id))
      setlistInfo(listInfo.concat(info))
    


  }
  //Fechar
  const remove = () => {
    setlistInfo([])

  }


  const linkStyle = {
    textDecoration: "none",
    color:"black"

};



  return (
    <S.Container>
      

      <S.Title>Os Objetivos de Desenvolvimento Sustentável no Camarão</S.Title>
      <S.Paragraph>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.Paragraph>
      <S.Mural>
        {
          data.map((item, index) => (
            <S.Box key={index} onClick={() => Modal(item)} >
              <article>
                <h2>{item.number}</h2>
                <h3>{item.title}</h3>
              </article>
              <img src={item.img} alt={item.title} />
            </S.Box>
          ))}
          <S.Back> <Link  style={linkStyle} to="/">Voltar</Link></S.Back>
             

      </S.Mural> 
      {listInfo.map((item, index) => (
        <S.ModalBox key={index}>
          <S.Barra >
            <article>
              <h2>{item.number}</h2>
              <h3>{item.title}</h3>
              <p>{item.objetivo}</p>
            </article>
            <img src={item.img} />
            <button onClick={remove} >X</button>
     
          </S.Barra>


          <S.Metas>
            <h3>{item.objetivo}</h3>
            <p>{item.phase1}</p>
            <p>{item.phase2}</p>
            <p>{item.phase3}</p>
            <p>{item.phase4}</p>
          </S.Metas>
        </S.ModalBox>
      ))}



    </S.Container>
  )
}