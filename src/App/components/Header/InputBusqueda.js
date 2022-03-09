import React from 'react'

const InputBusqueda = () => {
  return (
    <div>
        <form>
            <input type="text" name="inputText" />
            <button type='submit'>
            <i onClick={""} className="fas fa-search fa-2x"></i>
                search

            </button>
        </form>
    </div>
  )
}

export default InputBusqueda