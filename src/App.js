import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { ROUTES } from './routes'
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-body">
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}></Route>
            <Route path={ROUTES.ME} component={MyProfile}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
