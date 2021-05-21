import React from 'react';

function Login() {

    const formHandler = event => {
        alert('login')
    }

    return (
        <>
            <div className="flex-c-column">
                <form onSubmit={formHandler} className="flex-c-column form-container night-bg">
                    SIGN IN
                    <input className="form-input-width" name="email" placeholder="EMAIL"></input>
                    <input  className="form-input-width" name="password" placeholder="PASSWORD"></input>
                    <button  className="form-input-width" type="submit">SIGN IN</button>
                </form>
            </div>
        </>
    )
}

export default Login;