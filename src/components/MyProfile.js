import React, { useEffect, useState } from 'react'
import AuthService from '../services/AuthService'

const MyProfile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    AuthService.getLoggedUser().then(res => {
      setUser(...res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
        <div>{user.first_name} {user.last_name}</div>
  )
}

export default MyProfile
