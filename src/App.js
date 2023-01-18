import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<StepOne/>} />
          <Route path='/steptwo' element={<StepTwo/>} />
          <Route path='/stepthree' element={<StepThree/>} />

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
