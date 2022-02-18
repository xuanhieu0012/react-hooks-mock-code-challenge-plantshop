import React,{useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Navbar from "./Navbar";
function App() {
  const [isSave, setIsSave] = useState(false)
  return (
    <div className="app">
      <Navbar isSave={isSave}/>
      <Header />
      <PlantPage setIsSave={setIsSave}/>
    </div>
  );
}

export default App;
