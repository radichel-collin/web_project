// import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "../Header/Header";
import View1 from "../View1/View1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonAppBar />}/>

          <Route path="/View1" element={<View1 />}/>

        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;