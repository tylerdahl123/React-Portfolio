import logo from './logo.svg';
import './App.css';
import Nav from "./components/navbar/navbar";
import Home from "./pages/home"
import Contact from "./pages/contact"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from './pages/portfolio';
import Footer from "./components/footer/footer"
// import './components/navbar/node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div className="App">
 <Nav />
 <Route exact path="/" component={Home} />
 <Route exact path="/index.html" component={Home} />
 <Route exact path="/contact.html" component={Contact}/>
 <Route exact path="/portfolio.html" component={Portfolio}/>
 <Footer />
    </div></Router>
  );
}

export default App;
