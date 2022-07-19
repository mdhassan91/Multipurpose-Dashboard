import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    
    </BrowserRouter>
    </div>
  );
}

export default App;