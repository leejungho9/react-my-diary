import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';


function App() {
  return (
  <BrowserRouter>
      <Switch>
        <Route path="/add" component={Add}/>
        <Route path="/" component={Home}/>
      </Switch>
  </BrowserRouter>

  );
}

export default App;
