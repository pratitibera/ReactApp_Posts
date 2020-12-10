//import logo from './bg.png';
import './App.css';
import Home from './components/Home/Home';
import Postcorner from './components/Postcorner/Postcorner';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <img src={logo}></img> */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/post/:id" exact component={Postcorner}/>
      </Switch>
    </div>
  );
}

export default App;
