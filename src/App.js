import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import { ROUTES } from './routes'
import MyProfile from './components/MyProfile'
import HeaderBar from './components/HeaderBar'
import Register from './components/Register'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <div className="page-body">
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}></Route>
            <Route path={ROUTES.ME} component={MyProfile}></Route>
            <Route path={ROUTES.REGISTER} component={Register}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
