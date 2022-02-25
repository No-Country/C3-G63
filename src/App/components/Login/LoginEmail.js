import React from 'react'

const LoginEmail = () => {
  return (
    <div>
        <form>
            <label for="">usuario</label><br/>
            <input type="text" id='usuario'/>
            <label for="">Contraseña</label>
            <input type="password" id="contreña"/>
        </form>
    </div>
  )
}

export default LoginEmail