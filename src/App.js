import logo from "./logo.svg";
import "./App.css";
import Voiture from "./components/Voiture";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Voiture />
    </div>
  );
}

export default App;
