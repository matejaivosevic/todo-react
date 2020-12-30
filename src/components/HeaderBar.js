import React from 'react'
import '../assets/styles/headerBar.scss'
import { Route } from 'react-router-dom'

const HeaderBar = () => {
    return (
        <>
            <div className="header">
                <div className="col-md-12 row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <div className="button-container">
                            <Route render={({ history }) => (
                                <button onClick={() => history.push('/register')}>Register</button>
                            )} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderBar;