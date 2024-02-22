import { useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../Store/Auth-Context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const AuthCtx = useContext(AuthContext);
  const {token} = AuthCtx;
const passwordInputRef = useRef()
const history = useHistory();
const handleChangePassword = async (event) => {
  try {
     const newPassword = passwordInputRef.current.value;
    event.preventDefault();
   
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyArdEtkjfiCjPXg8O1W8SxYhW8fw8FloyY";
    const ChangePassword = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
const response = await ChangePassword.json();

if (ChangePassword.ok) {
   history.replace("/");
  alert("Password Changed Successfully");
  console.log(response);
 
} 
  else {
      let errorMessage = "Error Changing Password";
      if (response && response.error && response.error.message) {
        errorMessage = response.error.message;
      }

      throw new Error(errorMessage);
    }

  }
   catch (error) {
    alert("Error Changing Password");
 
  }
};



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
