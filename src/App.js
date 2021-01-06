import React from 'react'
import './App.css'
import { Switch } from 'react-router-dom'
import Login from './components/Login'
import { ROUTES } from './routes'
import MyProfile from './components/MyProfile'
import HeaderBar from './components/HeaderBar'
import Register from './components/Register'
import { PublicRoute } from './containers/PublicRoute/PublicRoute'
import { PrivateRoute } from './containers/PrivateRoute/PrivateRoute'

function App () {
  return (
    <div className="App">
      <HeaderBar />
      <div className="page-body">
        <Switch>
          <PrivateRoute exact path='/' component={MyProfile}></PrivateRoute>
          <PublicRoute path={ROUTES.LOGIN} component={Login}></PublicRoute>
          <PublicRoute path={ROUTES.REGISTER} component={Register}></PublicRoute>
          <PrivateRoute path='/me' component={MyProfile}></PrivateRoute>
        </Switch>
      </div>
    </div>
  )
}

export default App
