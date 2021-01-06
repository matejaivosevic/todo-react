import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import { ROUTES } from './routes'
import MyProfile from './components/MyProfile'
import HeaderBar from './components/HeaderBar'
import Register from './components/Register'
import { PublicRoute } from './containers/PublicRoute/PublicRoute'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}></Route>
            <PublicRoute path={ROUTES.REGISTER} component={Register}></PublicRoute>
            <Route path={ROUTES.ME} component={MyProfile}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
