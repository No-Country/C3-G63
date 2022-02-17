import React from 'react'


const FormLogin = () => {
  return (
    <div>
        <div>Logo</div>
        <div>
            <form action='' autoComplete='off'>
                <input type="mail" placeholder='Email' id='usuario'/><br/>
                <input type="password" placeholder="******" id="contrasenia"/>
                <button type='button'>Ingresar</button>

            </form>
        </div>
    </div>
  )
}

export default FormLogin