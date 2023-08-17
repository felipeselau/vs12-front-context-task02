import { useNavigate } from "react-router-dom";
import { NavWrapper } from "./navStyle";
import { Gear, House, PaintBrush } from "@phosphor-icons/react";



export default function NavBar(){

    const navigate = useNavigate();

    return(
        <NavWrapper>
            <div 
            className="nav-item"
            onClick={()=> navigate("/")}
            >
                <div className="nav-img">
                <House size={32} />
                </div>
                <p>Home</p>
            </div>
            <div className="nav-item"
            onClick={()=> navigate("/config")}
            >
                <div className="nav-img">
                <Gear size={32} />
                </div>
                <p>Configurar</p>
            </div>
            <div className="nav-item"
            onClick={()=> navigate("/customize")}
            >
                <div className="nav-img">
                <PaintBrush size={32} />
                </div>
                <p>Alterar Tema</p>
            </div>
        </NavWrapper>
    )
}