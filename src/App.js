import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <Route path="/register" component={Register}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
