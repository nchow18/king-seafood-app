import React from 'react';
import Auth from '../utils/auth';

function Profile() {

    const user = Auth.getUser();

    const formHandler = event => {
        alert('updated')
    }

    console.log(user);

    return (
        <>
    	    <div className="flex-c-column content">
                <form onSubmit={formHandler} className="flex-c-column form-container night-bg">
                        My Account
                            <input className="form-input-width" name="firstName" placeholder={user[0].firstName}></input>
                            <input className="form-input-width" name="lastName" placeholder={user[0].lastName}></input>
                            <input className="form-input-width" name="streetNumber" placeholder={user[0].streetNumber}></input>
                            <input className="form-input-width" name="streetName" placeholder={user[0].streetName}></input>
                            <input className="form-input-width" name="region" placeholder={user[0].region}></input>
                            <input className="form-input-width" name="postalCode" placeholder={user[0].postalCode}></input>
                            <input className="form-input-width" name="city" placeholder={user[0].city}></input>
                            <input className="form-input-width" name="state" placeholder={user[0].state}></input>
                            <input className="form-input-width" name="email" placeholder={user[0].email}></input>
                            <input type="password" className="form-input-width" name="password" placeholder='PASSWORD'></input>
                            <button className="form-input-width" type="submit">Update Information</button>
                        </form>               
                </div>
        </>
    )
}

export default Profile;