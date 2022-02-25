import React from 'react'
import './SignUp.scss'

const FormEmail = () => {
  return (
    <div className="formCtn">
        <form className='formulario'>
                <label htmlFor="">Usuario</label><br/>
                <input type="text" placeholder="Usuario" id='usuario'/>
                <input type="passoword" placeholder="Contraseña"/>
                <button>Confirmar</button>
            </form>
    </div>
  )
}

export default FormEmail