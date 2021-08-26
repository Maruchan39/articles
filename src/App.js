import React from "react"
import Home from "./pages/Home"
import Error from "./pages/Error"
import SingleArticle from "./pages/SingleArticle"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
<Home />
        </Route>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
        <Route path="*">
<Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
