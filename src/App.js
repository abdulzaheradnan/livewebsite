import './App.css';
import "./header.css";
import "./login.css"
import { Header } from "./header"
import { Home } from "./home"
import { Signup } from "./signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Singlepageproduct } from './singlepageproduct';
import { Basket } from "./basket"
import { Login } from "./login"
function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />



          } />
          <Route path="/signup" element={<Signup />



          } />
          <Route path="/Home" element={<Home />

          } />
          <Route path="/basket" element={<Basket></Basket>}></Route>
          {/* <Route path="/Single/:id" element={<Singlepageproduct/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
