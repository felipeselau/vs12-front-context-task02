import { styled } from "styled-components";

export const PageWrapper = styled.section`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;

h2.sect-title{
    font-size: 2rem;
}

.champs-wrapper, .roles-wrapper, .emotes-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;

}

`

export const CardsWrapper = styled.div`
margin-top: 2rem;
width: 90vw;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding-bottom: 1rem;
    border: 2px solid #000016;
}

.card:hover{
    opacity: 0.7;
}

.card.selected{
    border: 2px solid #CA9100;
    border-radius: 4px;
}

`