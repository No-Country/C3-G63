import React from 'react'
import { GoogleLogout } from 'react-google-login'

const LogOut = () => {

    const clientID = "990173810108-8ieaqtgu1qtsglg70jcbsslr9kjvngl7.apps.googleusercontent.com";

    const onSucces = () => {
        console.log("Logout exitoso")
    }

  return (
    <div>
        <GoogleLogout 
             clientId={clientID}
             buttonText={'Logout'}
             onLogoutSuccess={onSucces}
        />
           
    </div>
  )
}

export default LogOut