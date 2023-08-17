import React, { useContext } from "react";
import NavBar from "../../components/navbar/NavBar";
import { ChampsContext } from "../../context/champsContext";
import { rolesContext } from "../../context/rolesContext";
import { emotesContext } from "../../context/emotesContext";
import { HomePage } from "./homeStyle";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { selectedChamp } = useContext(ChampsContext);
  const { selectedRole } = useContext(rolesContext);
  const { selectedEmote } = useContext(emotesContext);

  const navigate = useNavigate()

  return (
    <>
      <NavBar />
      <HomePage>
        <div className="title">
          <h2>LoL Board</h2>
          <h3>Uma pequena Dashboard pessoal sobre League of Legends</h3>
        </div>
        {selectedChamp.name == "" ? (
        <>
          <h2>Selecione um campeão na página Configurar!</h2>
          <button onClick={()=> navigate("/config")}>Selecionar</button>
        </>
        ) : (
          <div className="info-sect">
            <div className="champ">
              <h2>Seu Campeão Favorito:</h2>
              <img
                src={`./img/champs/${selectedChamp.img}.jpg`}
                alt={`Ilustração do personagem ${selectedChamp.name}`}
                width={600}
              />
            </div>
            <div className="sub-info">
              {selectedRole.role == "" && selectedEmote.name == "" ? (
                <>
                <h2>
                  Selecione sua classe favorita e emota na página Configurar!
                </h2>
                </>
              ) : (
                <>
                  <div className="role">
                    <h2>Sua Classe Favorita: </h2>
                    {selectedRole.role == "" ? (
                      <h2>Selecione uma Classe na página configurar!</h2>
                    ) : (
                      <img
                        src={`./img/roles/${selectedRole.img}.webp`}
                        alt={`Ícone da classe ${selectedRole.role}`}
                        width={200}
                      />
                    )}
                  </div>
                  <div className="emote">
                    <h2>Seu Emote Favorito</h2>
                    {selectedEmote.name == "" ? (
                      <h2>Selecione um Emote na página configurar!</h2>
                    ) : (
                      <img
                        src={`./img/emotes/${selectedEmote.img}.webp`}
                        alt={`Ilustração do emote ${selectedEmote.name}`}
                        width={200}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </HomePage>
    </>
  );
}
