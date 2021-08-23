import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewConstruction from './NewConstruction';

function App() {
  const title = 'Flat Earth Construction';
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path={'/flat-earth-construction'}>
              <Home/>
            </Route>
            <Route exact path={'/flat-earth-construction/newconstruction'}>
              <NewConstruction/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
