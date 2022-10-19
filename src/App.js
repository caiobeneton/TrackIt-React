import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hoje from "./Componentes/Hoje/Hoje";
import Cadastro from "./Componentes/Home/Cadastro";
import Login from "./Componentes/Home/Login";
import GlobalStyle from "./globalStyles";

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>
                <Route path="/hoje" element={<Hoje></Hoje>}></Route>
            </Routes>
        </BrowserRouter>
    )
}