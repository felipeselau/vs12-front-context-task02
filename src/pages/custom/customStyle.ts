import { styled } from "styled-components";

export const Container = styled.section`

width: 90vw;
height: 85vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
    font-size: 1.3rem;
}

button{
    all: unset;
    cursor: pointer;
    background-color: #CA9100;
    padding: 1.5rem 1rem;
    margin-top: 1.3rem;
    border-radius: 12px;
}

button:hover{
    opacity: 0.7;
}


`