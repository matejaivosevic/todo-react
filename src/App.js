import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Register from './components/Register';
import { ROUTES } from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <Route path={ROUTES.REGISTER} component={Register}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
