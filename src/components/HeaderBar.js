import React from 'react'
import '../assets/styles/headerBar.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

const HeaderBar = () => {
  return (
    <div className="header">
        <div className="col-md-12 row">
            <div className="col-md-10"></div>
            <div className="col-md-2">
                <div className="button-container">
                    <Link to={ROUTES.REGISTER}>
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBar
