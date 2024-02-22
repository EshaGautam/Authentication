import { useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../Store/Auth-Context';
import { useContext } from 'react';

const ProfileForm = () => {
   const AuthCtx = useContext(AuthContext);
  const { token} = AuthCtx;
const passwordInputRef = useRef()

const handleChangePassword =async(event)=>{
  try
  {event.preventDefault()

const ChangePassword = await fetch(
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyArdEtkjfiCjPXg8O1W8SxYhW8fw8FloyY",
  {
    method: "POST",
    body: JSON.stringify({
      idToken: token,
      password: passwordInputRef.current.value,
      returnSecureToken: false,
    }),
    headers: {
      "content-type": "application/json",
    },
  }
);
const response = await ChangePassword.json()
if(response.ok){
  alert('Password Changed Successfully')
}
else{
  throw new Error(response.error.message)
}
}
catch(error){
alert('Error Changing in password')
}

}

  return (
    <form className={classes.form} onSubmit={handleChangePassword}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button type ='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
