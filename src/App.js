import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { ROUTES } from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-body">
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
