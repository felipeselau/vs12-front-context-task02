import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Config from "./pages/config/Config";
import Custom from "./pages/custom/Custom";
import NotFound from "./pages/notFound/NotFound";



export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/config" element={<Config />}/>
                <Route path="/customize" element={<Custom />}/>
                <Route path="/*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}