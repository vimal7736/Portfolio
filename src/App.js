import {BrowserRouter ,Route, Routes } from "react-router-dom";
import Overview from "./components/Overview";
import ReactPage from "./pages/ReactPage";



function App(){
return(
  <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Overview />} />
    <Route path="/react" element ={<ReactPage />} />
    </Routes>

  </BrowserRouter>
)
}

export default App