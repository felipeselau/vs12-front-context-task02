import React from "react";
import NavBar from "../../components/navbar/NavBar";
import { Container } from "./customStyle";
import { useNavigate } from "react-router-dom";


export default function Custom(){
    const navigate = useNavigate()
    return(
        <>
        <NavBar />
        <Container>
            <h1>Página em construção! em breve será possível também mudar o tema da página! assim o LoL Board fica ainda mais a sua cara :)</h1>
            <button onClick={()=>{navigate("/")}}>Voltar para a home</button>
        </Container>
        </>
    )
}