import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import '../../css/Signin.css';

function SignUp() {
  const [formData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const [addUser, { error }] = useMutation(ADD_USER);

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
          SIGN UP
            <input 
              value={formData.first_name} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="first_name" 
              placeholder="FIRST NAME"/>
            <input 
              value={formData.last_name} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="last_name" 
              placeholder="LAST NAME"/>
            <input 
              value={formData.email} 
              onChange={handleInputChange} 
              className="sign-input" 
              name="email" 
              placeholder="EMAIL"/>
            <input 
              value={formData.password} 
              onChange={handleInputChange} 
              type="password"  
              className="sign-input" 
              name="password" 
              placeholder="PASSWORD"/>
            <button disabled={!(formData.email && formData.password && formData.first_name && formData.last_name)} className="sign-input" type="submit">SIGN IN</button>
          </form>
      </div>
    </>
  )
}

export default SignUp;