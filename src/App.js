import "./App.css";
import Header from "./components/Header";
import SolarSystem from "./components/SolarSystem";
import Missions from "./components/Missions";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <SolarSystem />
      <Missions />
    </>
  );
}

export default App;
