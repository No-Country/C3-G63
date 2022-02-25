import React from 'react'

const LoginCorreo = () => {
  return (
    <div className='bordeado'>
        <form className='formulario'>
                <label  for="">
                  <h1>Usuario</h1>
                </label><br/>
                <input type="text" placeholder="Usuario" id='usuario'/>
                <input type="passoword" placeholder="Contraseña"/>
                <button>Confirmar</button>
            </form>
    </div>
  )
}

export default LoginCorreo