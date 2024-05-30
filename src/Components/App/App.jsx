// import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Forms from "../Forms/Forms";
import Tables from "../Tables/Tables";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>

          <Route path="/Forms" element={<Forms />}/>

          <Route path="/Tables" element={<Tables />}/>

        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;