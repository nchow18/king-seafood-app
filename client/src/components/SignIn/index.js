import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
import SignUp from '../Signup';

function Login(props) {

  const {
    cart,
    setCartQty
  } = props

  window.scrollTo(0,0)


    const [formData, setUserFormData] = useState({ email: '', password: '' })
    const [login, { error } ] = useMutation(LOGIN)
    const [isLog, setLog] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData.email, formData.password)

        try {
            const { data } = await login({
                variables: {
                  email: formData.email.toLowerCase(),
                  password: formData.password
                }
            })
            Auth.login(data.login.token)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(isLog);

  return (
      <div className="customer-container">
          <div className={`log-container ${isLog === true && `log-modal`}`}>
            <div>Already a member? <p onClick={() => {setLog(true)}}>Log in here</p></div>            
              <form 
                  onSubmit={handleFormSubmit} 
                  className="sign-form-container night-bg">
                  <p>Log in</p>
                  <input 
                    onChange={handleInputChange} 
                    value={formData.email} 
                    className="sign-input" 
                    name="email" 
                    placeholder="Email">
                  </input>
                  <input 
                    onChange={handleInputChange} 
                    value={formData.password} 
                    className="sign-input" 
                    type="password"
                    name="password" 
                    placeholder="Password">
                  </input>
                    {
                    error ? <div>
                        <p className="error-text" >The provided credentials are incorrect</p>
                    </div> : null
                    }
                  <button 
                    disabled={!(formData.email && formData.password)}
                    onChange={handleInputChange} 
                    className="sign-input" 
                    type="submit"
                    variant="success"
                  >
                  Sign in
              </button>
            </form>
          </div>
          <SignUp
            isLog={isLog}
            setLog={setLog} />
      </div>
  )
}

export default Login;