import React from 'react'
import './App.css'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './components/Login'
import { ROUTES } from './routes'
import MyProfile from './components/MyProfile'
import HeaderBar from './components/HeaderBar'
import Register from './components/Register'
import { PublicRoute } from './containers/PublicRoute/PublicRoute'
import { PrivateRoute } from './containers/PrivateRoute/PrivateRoute'
import history from './utils/history'

function App () {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <PublicRoute path={ROUTES.LOGIN} component={Login}></PublicRoute>
            <PublicRoute path={ROUTES.REGISTER} component={Register}></PublicRoute>
            <PrivateRoute path='/me' component={MyProfile}></PrivateRoute>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
