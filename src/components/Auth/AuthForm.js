import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [sending,setSending] = useState(false)
  const emailInput = useRef()
  const passwordInput = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = async(event)=>{

    try{ event.preventDefault()
    const enteredEmail =  emailInput.current.value;
    const enteredPassword =  passwordInput.current.value;
    
    if(isLogin){

    }
    else{
      setSending(true)
       const userData = await fetch(
         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArdEtkjfiCjPXg8O1W8SxYhW8fw8FloyY",
         {
           method: "POST",
           body: JSON.stringify({
             email: enteredEmail,
             password: enteredPassword,
             returnSecureToken: true,
           }),
           headers: {
             "content-type": "application/json",
           },
         }

       );
       if(userData.ok){
      
       }
       else{
        let response = await userData.json()
        let errorMessage = 'Authenticaton Failed'
        if(response && response.error && response.error.message)
        errorMessage= response.error.message

        throw new Error(errorMessage)
       }
    }}
   catch(error){
    alert(error)
   }
   setSending(false)

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInput} required />
        </div>
        <div>
         {!sending?<button className={classes.submit} type='submit'>
            {isLogin ? "Login" : "Create Account"}
          </button>:<p style={{ color: '#ae82cc' }}>Sending request....</p>}  
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
