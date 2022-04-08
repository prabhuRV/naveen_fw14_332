import {Routes, Route} from "react-router-dom"
import './App.css';
import Registration1 from './Pages/Registration-1';
import Registration2 from "./Pages/Registration-2";
import Users from "./Pages/Users";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/registration/one" element={<Registration1 />}> </Route>
        <Route path="/registration/two" element={<Registration2 />}> </Route>
        <Route path="/Users" element={<Users />}> </Route>

      </Routes>
    </div>
  );
}

export default App;
