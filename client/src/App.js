import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Detail from "./components/Detail"
import ActivityForm from "./components/ActivityForm"

function App() {
  return (           
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/countries" element={<Home/>} />
          <Route path="/activity" element={<ActivityForm/>} />
          <Route path="/countries/:id" element={<Detail/>} />
        </Routes>
      </div>
    </Router> 

  );
}

export default App;
