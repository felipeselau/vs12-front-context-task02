import styled from "styled-components"

export const NavWrapper = styled.div`

background-color: #06002E;
width: 150px;
height: 100vh;
position: sticky;
top: 0;

display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
padding-top: 4rem;

.nav-item{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-item:hover{
    opacity: 0.7;
}


`