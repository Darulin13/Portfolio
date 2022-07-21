import React, { useRef, useState } from "react";
import * as S from "./styles"
import Book from "./icons/Education.svg"
import Lixo from "./icons/lixo.svg"
import Bus from "./icons/Bus.svg"
import Oil from "./icons/Oil.svg"
export default function OnuPage() {
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
  const manipularCor = useRef()
  const handleCor = () => {
    manipularCor.current.style.backgroundColor = "blue"
  }
  //Info
  const [info, setInfo] = useState(null)
  const [listInfo, setlistInfo] = useState([])
  const [modal, setModal] = useState(false)
  const handleInfo = (item) => {
    setInfo(item)
    setlistInfo(listInfo.concat(info))
    console.log("teste", info)
    console.log("teste 3", listInfo)
    setModal(true)
  }
  const Clean = () => {
    setInfo(null)
  }




  return (
    <S.Container>
      <S.Title>Os Objetivos de Desenvolvimento Sustentável no meu bairro</S.Title>
      <S.Paragraph>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.Paragraph>
      <S.Mural>
        {
          data.map((item, index) => (
            <S.Box ref={manipularCor} key={index} item={item} onClick={() => handleInfo(item)} >
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