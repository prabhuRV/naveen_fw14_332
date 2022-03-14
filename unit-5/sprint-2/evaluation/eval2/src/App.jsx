import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
        
        <AddHouse />
        {/* Show text Add House or Show Rentals based on state */}
        <Rentals />
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
