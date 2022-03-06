import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';


function App() {
  return (
  <BrowserRouter>
      <Switch>
        <Route exact path="/edit" component={Edit}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/detail" component={Detail}/>
        <Route exact path="/add" component={Add}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
  </BrowserRouter>

  );
}

export default App;
