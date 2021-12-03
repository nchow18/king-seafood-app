import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function SignUp(props) {

  const {
    isLog,
    setLog
  } = props
    
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
      <div className={`sign-container ${isLog === false && `log-modal`}`}>
          <form onSubmit={handleFormSubmit} className="sign-form-container night-bg">
            <p className="bold-font">Create your account</p>
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
            <button disabled={!(formData.email && formData.password && formData.first_name && formData.last_name)} className="sign-input" type="submit">Sign up</button>
          </form>
          <div>Not a member? <p onClick={() => {setLog(false)}}>Sign up now!</p></div>          
      </div>
    </>
  )
}

export default SignUp;