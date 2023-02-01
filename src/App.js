import React from 'react'
import { BrowserRouter as Router, Route , Switch  } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Footer from './screens/Footer/Footer';
const App = () => {
  return (
<Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" >
              <About />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/about">
              <About />
          </Route>
        </Switch>
        <Footer />
    </div>
      </Router>
  )
}

export default App