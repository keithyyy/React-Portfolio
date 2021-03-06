import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  
  const title = "Welcome!"
  
  return (

    <Router>
      <div className="container main">
        <Navbar />
        <Route exact path="/" component={Home} />

        
      </div>


    </Router>
      
  );
}

export default App;
