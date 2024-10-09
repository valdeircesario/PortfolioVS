import { BrowserRouter, Routes, Route } from "react-router-dom";



import Projetos from "./Projetos"
import Home from "../PaginaInicial";
import SobreMim from "./SobreMim";
import Cursos from "./Cursos";
import Cardes from "./Globo";
import Contato from "./Contato";

function AppRutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/src/components/SobreMim.jsx" element={<SobreMim/>} />
                <Route path="/src/components/Projetos.jsx" element={<Projetos/>} />
                <Route path="/src/components/Cursos.jsx" element={<Cursos/>} />
                <Route path="/src/components/Contato.jsx" element={<Contato/>} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppRutes;
