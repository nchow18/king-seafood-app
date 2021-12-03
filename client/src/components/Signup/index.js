import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function SignUp() {
  const [formData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addUser({
        variables: { input: {...formData}}
      })

      Auth.login(data.addUser.token)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="sign-container">
          <form onSubmit={handleFormSubmit} className="sign-form-container night-bg">
            <p>Sign up</p>
            <input 
              value={formData.first_name} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="first_name" 
              placeholder="First Name"/>
            <input 
              value={formData.last_name} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="last_name" 
              placeholder="Last Name"/>
            <input 
              value={formData.email} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="email" 
              placeholder="Email"/>
            <input 
              value={formData.password} 
              onChange={handleInputChange} 
              type="password"  
              className="sign-input" 
              name="password" 
              placeholder="Password"/>
            <button disabled={!(formData.email && formData.password && formData.first_name && formData.last_name)} className="sign-input" type="submit">SIGN UP</button>
          </form>
          <div>Already a member? <p>Log in here</p></div>          
      </div>
    </>
  )
}

export default SignUp;