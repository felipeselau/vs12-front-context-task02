import { createContext, useState } from "react"
import { iChildren, iEmote } from "../utils/interfaces"

interface iEmoteData{
    emotesData: iEmote[];
    selectedEmote: iEmote;
    selectEmote: (emote : iEmote) => void
    getEmotes: () => void;
}

export const emotesContext = createContext({} as iEmoteData);

export function EmotesProvider({children}: iChildren){
    const [emotesData, setEmotesData] = useState<iEmote[] | []>([]);
    const [selectedEmote, setSelectedEmote] = useState<iEmote>({id:"0", img:"", name:""})

    function selectEmote(emote: iEmote){
        setSelectedEmote(emote);
    }

    async function getEmotes(){
        try{
            const response = await fetch("./db/dbEmotes.json");
            if(response.ok){
                const data = await response.json();
                console.log(data)
                setEmotesData(data.emotes);
            }
        }catch(error){
            console.error(error);
        }
    }


    return(
        <emotesContext.Provider value={{emotesData, selectedEmote, selectEmote , getEmotes}}>
            {children}
        </emotesContext.Provider>
    )
}