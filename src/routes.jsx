import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Profissionais from "./pages/profissionais"
import Espaco from "./pages/espaco"

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/profissionais' element={<Profissionais/>} />
                <Route path='/espaco' element={<Espaco/>} />
            </Routes>
        </BrowserRouter>
    )
}