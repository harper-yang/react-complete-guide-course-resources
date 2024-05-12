import {Input} from "./Input.jsx";
import {hasMinLength, isEmail} from "../util/validation.js";
import {useInput} from "../hooks/useInput.js";

export default function StateLogin() {

  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value));

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => hasMinLength(value, 6));


  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password)

  }

  return (
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="control-row">

          <Input label="Email" id="email" type="email" name="email"
                 onChange={handleEmailChange}
                 onBlur={handleEmailBlur}
                 value={email}
                 error={emailHasError && "Please enter a valid email address."}/>

          <Input label="Password" id="password" type="password" name="password"
                 onChange={handlePasswordChange}
                 onBlur={handlePasswordBlur}
                 value={password}
                 error={passwordHasError && "Please enter a valid password."}/>
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
  );
}
