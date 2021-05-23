import React from 'react';

function SignUp() {

    const formHandler = event => {
        alert('signup')
    }

    return (
        <>
            <div className="flex-c-column">

                    <form onSubmit={formHandler} className="flex-c-column form-container night-bg">
                    SIGN UP
                        <input className="form-input-width" name="firstName" placeholder="FIRST NAME"></input>
                        <input className="form-input-width" name="lastName" placeholder="LAST NAME"></input>
                        <input className="form-input-width" name="phone" placeholder="PHONE NUMBER"></input>
                        <input className="form-input-width" name="streetNumber" placeholder="STREET NUMBER"></input>
                        <input className="form-input-width" name="streetName" placeholder="STREET NAME"></input>
                        <input className="form-input-width" name="region" placeholder="REGION"></input>
                        <input className="form-input-width" name="postalCode" placeholder="POSTAL CODE"></input>
                        <input className="form-input-width" name="city" placeholder="CITY"></input>
                        <input className="form-input-width" name="state" placeholder="STATE"></input>
                        <input className="form-input-width" name="email" placeholder="EMAIL"></input>
                        <input type="password"  className="form-input-width" name="password" placeholder="PASSWORD"></input>
                        <button className="form-input-width" type="submit">SIGN IN</button>
                    </form>
            </div>
        </>
    )
}

export default SignUp;