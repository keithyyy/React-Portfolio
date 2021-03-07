import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { HashRouter as Router, Route } from "react-router-dom"
import './App.css'

function App() {
  
  return (

    <Router>
      <div className="container main">
        <Navbar />
        <Route exact path="#/" component={Home} />
        <Route exact path="#/projects" component={Projects} />

        
      </div>

      
    </Router>
      
  );
}

export default App;
