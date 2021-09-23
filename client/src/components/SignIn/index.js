import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
import '../../css/Signin.css';
import SignUp from '../Signup';

function Login() {
    const [formData, setUserFormData] = useState({ email: '', password: '' })
    const [login, { error } ] = useMutation(LOGIN)

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

  return (
      <>
          <div className="sign-container">
              <form 
              onSubmit={handleFormSubmit} 
            className="sign-form-container night-bg">
              <p>LOG IN</p>
              <input 
                onChange={handleInputChange} 
                value={formData.email} 
                className="sign-input" 
                name="email" 
                placeholder="EMAIL">
              </input>
              <input 
                onChange={handleInputChange} 
                value={formData.password} 
                className="sign-input" 
                type="password"
                name="password" 
                placeholder="PASSWORD">
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
                  LOG IN
              </button>
            </form>
          </div>
          <div>
            <SignUp />
          </div>
      </>
  )
}

export default Login;