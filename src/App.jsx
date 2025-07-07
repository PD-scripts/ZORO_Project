
import Register from './components/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
