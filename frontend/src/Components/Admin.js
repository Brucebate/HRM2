import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

const Admin = () => {
    const location = useLocation()

  return (
    <div className="homepage">
        <h1>hello {location.state.name} welcome to the home</h1>
    </div>
  )
}
export default Admin