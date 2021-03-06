import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  
  return (

    <Router>
      <div className="container main">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />

        
      </div>

      
    </Router>
      
  );
}

export default App;
