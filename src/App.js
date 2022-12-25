
import NavBar from './components/NavBar';
import "./App.css";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import routes from './routes'

function App() {

  return (
    <Router>
      <NavBar/>
      <div className = "container mt-3">
      <Switch>
      {routes.map((route) => {
        return <Route exact path = {route.path} component ={route.component} key={route.path}></Route>;})}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
