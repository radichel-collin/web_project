// import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "../Header/Header";
import Forms from "../Forms/Forms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonAppBar />}/>

          <Route path="/Forms" element={<Forms />}/>

        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;