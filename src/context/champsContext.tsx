import { createContext, useState } from "react"
import { iChildren, iChamp } from "../utils/interfaces"

//interface com o que vai ser exportado
interface IchampContext {
    champData: iChamp[];
    selectedChamp: iChamp;
    getChamps: () => void;
    selectChamp: (champ : iChamp) => void;

}

export const ChampsContext = createContext({} as IchampContext);

export function ChampionsProvider({ children }: iChildren){
    const [champData, setChampData] = useState<iChamp[] | []>  ([])
    const [selectedChamp, setSelectedChamp] = useState<iChamp>({id: "0", img:"", name: ""})
    
    function selectChamp(champ : iChamp){
        setSelectedChamp(champ);
    }

    async function getChamps(){
        try{
            const response = await fetch("./db/dbChamps.json");
            if(response.ok){
                const data = await response.json();
                setChampData(data.champions)
            }
        }catch(error){
            console.error(error)    
        }
    }

    return(
        <ChampsContext.Provider value={{champData, selectedChamp ,getChamps, selectChamp}}>
            {children}
        </ChampsContext.Provider>
    )
}

