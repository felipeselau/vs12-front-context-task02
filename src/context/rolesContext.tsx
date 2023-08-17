import { createContext, useState } from "react"
import { iChildren, iRole } from "../utils/interfaces"

interface iRoleData{
    rolesData: iRole[];
    selectedRole: iRole;
    selectRole: (role : iRole) => void;
    getRoles: () => void;
}

export const rolesContext = createContext({} as iRoleData);

export function RolesProvider({children}:iChildren){
    const [rolesData, setRolesData] = useState <iRole[] | []>([])
    const [selectedRole, setSelectedRole] = useState<iRole>({id: "0", img: "", role: "", text: ""})

    function selectRole(role: iRole){
        setSelectedRole(role);
    }

    async function getRoles(){

        try{
            const response = await fetch("./db/dbRoles.json");
            if(response.ok){
                const data = await response.json();
                setRolesData(data.Roles)
            }
        }catch(error){
            console.error(error);
        }
    }

    return(
        <rolesContext.Provider value={{ rolesData , selectedRole,  getRoles, selectRole }}>
            {children}
        </rolesContext.Provider>
    )
}