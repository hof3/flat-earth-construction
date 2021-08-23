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
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Home/>
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/newconstruction'}>
              <NewConstruction/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
