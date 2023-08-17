import React from "react";
import NavBar from "../../components/navbar/NavBar";
import { useContext , useEffect } from "react";
import { ChampsContext } from "../../context/champsContext";
import { rolesContext } from "../../context/rolesContext";
import { CardsWrapper } from "./configStyle";
import { PageWrapper } from "./configStyle";
import { emotesContext } from "../../context/emotesContext";
import ChampCard from "../../components/champCard/ChampCard";

// TODO
// consumir bancos via contexto e renderizar no componente
// escolher um champ, um emote e uma role
// subir de volta para um esto no componente
export default function Config(){
    const {getChamps, selectChamp ,champData, selectedChamp} = useContext(ChampsContext)
    const { getRoles, selectRole, rolesData, selectedRole } = useContext(rolesContext)
    const { getEmotes, selectEmote, emotesData , selectedEmote } = useContext(emotesContext)

    useEffect(()=>{
        getChamps();
        getRoles();
        getEmotes();
    }, [])

    return(
        <>
        <NavBar />
        <PageWrapper>
        <h2 className="sect-title">Configure aqui sua Dashboard!</h2>
        <h3 className="sect-subtitle">Escolha um campeão, uma classe e um emote e personalize sua página!</h3>

        <div className="champs-wrapper">
            <h2>Campeão Favorito: {selectedChamp.name}</h2>
                <CardsWrapper>
                {champData.map((champ)=>{
                    if(selectedChamp.name == champ.name){
                        return(
                            <ChampCard id={champ.id} name={champ.name} img={champ.img} isSelected={true} />
                        )
                    }else{
                        return(
                            <ChampCard id={champ.id} name={champ.name} img={champ.img} isSelected={false} />
    
                        )
                    }

                    
                })}
                </CardsWrapper>
            
            <div className="roles-wrapper">
                <h2>Classe Favorita: {selectedRole.role}</h2>
                <CardsWrapper>
                    {rolesData.map((role)=>{
                        return(
                            <div className="role-card card" id={role.id} onClick={()=>{selectRole(role)}}>
                                <img src={`./img/roles/${role.img}.webp`} alt={`Símbolo da classe ${role.role}`} width={150} />
                                <h3>{role.role}</h3>
                            </div>
                        )
                    })}
                </CardsWrapper>
            </div>

            <div className="emotes-wrapper">
                <h2>Emote Favorito: {selectedEmote.name}</h2>
                    <CardsWrapper>
                        {emotesData.map((emote)=>{
                            return(
                                <div className="emote-card card" id={emote.id} onClick={()=>{selectEmote(emote)}}>
                                    <img src={`./img/emotes/${emote.img}.webp`} alt={`Ilustração do emote ${emote.name}`} width={150}/>
                                    <h3>{emote.name}</h3>
                                </div>
                            )
                        })}
                    </CardsWrapper>
            </div>
        </div>
            
        </PageWrapper>
        </>
    )
}