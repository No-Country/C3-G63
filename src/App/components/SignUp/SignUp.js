import React from 'react'
import logo from '../../../Assets/Vector.png'
import '../../../index.css'

const SignUp = () => {
  return (
    <div className='container'>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <button >Sign In with Google</button><br/>
            <button>Sign In with Facebook</button><br/>
            <form className='formulario'>
                <label for="">Usuario</label>
                <input type="text" placeholder="Usuario" id='usuario'/>
                <input type="passowrd" placeholder="Contraseña"/>
                <button>Confirmar</button>
            </form>
        </div>

    </div>
  ) 
}

export default SignUp