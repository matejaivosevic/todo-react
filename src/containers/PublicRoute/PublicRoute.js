import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectIsAuthenticated } from '../../store/selectors'

export function PublicRoute ({
  component: Component,
  isAuthenticated,
  ...rest
}) {
  const isAuth = useSelector(makeSelectIsAuthenticated())
  return (
    <Route
      {...rest}
      render={props =>
        isAuth
          ? (
          <Redirect to="/me" />
            )
          : (
          <Component {...props} />
            )
      }
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated()
})

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(PublicRoute)
