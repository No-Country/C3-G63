import React from 'react'
import './SignUp.scss'

const FormEmail = () => {
  return (
    <div>
        <form className='formulario'>
                <label for="">Usuario</label><br/>
                <input type="text" placeholder="Usuario" id='usuario'/>
                <input type="passoword" placeholder="Contraseña"/>
                <button>Confirmar</button>
            </form>
    </div>
  )
}

export default FormEmail