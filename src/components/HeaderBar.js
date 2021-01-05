import React from 'react'
import '../assets/styles/headerBar.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import { makeSelectToken } from '../store/selectors'
import { useSelector } from 'react-redux'

const HeaderBar = () => {
  const token = useSelector(makeSelectToken())

  const authenticatedUserButtonsVisibility = {
    visibility: token ? 'hidden' : 'visible'
  }

  return (
    <div className="header">
        <div className="col-md-12 col-lg-12 col-sm-12 row">
            <div className="col-md-10 col-lg-10"></div>
            <div className="col-md-2 col-lg-2 col-sm-2">
                <div className="button-container">
                    <Link to={ROUTES.REGISTER} style={authenticatedUserButtonsVisibility}>
                        <button>Register</button>
                    </Link>
                    <Link to={ROUTES.LOGIN} style={authenticatedUserButtonsVisibility}>
                        <button className="login-button">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBar
