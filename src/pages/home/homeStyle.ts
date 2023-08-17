import { styled } from "styled-components";

export const HomePage = styled.section`
width: 90vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

.title{
    margin: 2rem 0;
}

.title h2{
    font-size: 2.5rem;
}

.info-sect{
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.info-sect h2 , .sub-info h2{
    margin-bottom: 2rem;
}

.sub-info{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

button{
    all: unset;
    cursor: pointer;
    background-color: #CA9100;
    padding: 1.5rem 1rem;
    margin-top: 1.3rem;
    border-radius: 12px;
    width: 30%;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 5rem;
}

button:hover{
    opacity: 0.7;
}



`