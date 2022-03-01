import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {Context} from "../../../store/auth-context"
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import "./SignUp.scss";
import useInput from "../../../hooks/use-input";

const FormEmail = () => {
  const authCtx = useContext(Context)
  const isNotEmpty = value => value.trim() !== '' && value.length > 5;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHanlder: emailChangedHandler, 
    inputBlurHandler: emailBlurHandler,

  } = useInput(value => value.includes('@'));

  const {
    value: enteredPassword, 
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError, 
    valueChangeHanlder: passwordChangedHandler, 
    inputBlurHandler: passwordBlurHandler,

  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } 

  const registerHandler = async (event) => {
    setIsLoading(true)
    event.preventDefault();
    try {
      await authCtx.signup(enteredEmail, enteredPassword)
      setIsLoading(false)
      navigate("/");
      console.log(authCtx.enteredEmail);

    } catch (error) {
      setIsLoading(false)
 
    }
  };

  return (
    <>
    <div className="formCtn">
      <form className="formulario" onSubmit={registerHandler}>
        <label htmlFor="user">Email</label>
        <input
          id="user"
          type="email"
          placeholder="Email"
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error">Por favor poner un email valido</p>}
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && <p className="error">La contraseña debe ser de 6 caracteres</p>}
        <button disabled={!formIsValid}>Confirmar</button>
      </form>
      {isLoading && <LoadingSpinner />}
    </div>
    </>
  );
};

export default FormEmail;
