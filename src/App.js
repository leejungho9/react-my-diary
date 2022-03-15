import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import { ConnectedRouter } from "connected-react-router";
import history from "./history";


const App = () => {
  return (
  <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/edit/:id" component={Edit}/>
        <Route exact path="/diary/:id" component={Detail}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/add" component={Add}/>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
  </ConnectedRouter>

  );
}

export default App;
