import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Register from './components/Register';
import { ROUTES } from './routes'

function App() {
  const { t, i18n } = useTranslation();

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <Route path={t(ROUTES.REGISTER)} component={Register}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
