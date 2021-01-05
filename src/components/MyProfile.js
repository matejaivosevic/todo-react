import React from 'react'
import { getLocalStorageItem } from '../utils/localStorage'

const MyProfile = () => {
  const user = JSON.parse(getLocalStorageItem('user'))

  return (
        <div>{user}</div>
  )
}

export default MyProfile
