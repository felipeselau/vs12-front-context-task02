import React from "react";
import { Container } from "../custom/customStyle";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

export default function NotFound(){
    const navigate = useNavigate()
    return(
        <>  <NavBar />
            <Container>
                <h1>404 - Página não Encontrada!</h1>
                <h3>A página que você tentou acessar não foi encontrada</h3>
                <button
                onClick={()=>{navigate("/")}}
                >Voltar para a Página Inicial</button>
            </Container>
        </>
    )
}