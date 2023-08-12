
// import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import FormTemplate from "./components/FormTemplate"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/forms" element={<FormTemplate/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
