import React, { useState } from  'react';
    
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState (false); // default value of false

    const createUser = (e) => {
        e.preventDefault();      // preventing the default refresh of the browser to keep our state from being reset
    
    // building an object:
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setHasBeenSubmitted (true);  // updating state will change the message to be displayed in the form.
    }; 


    const inputFormStyle = {
        
        textalign: "center",
        borderRadius: "5px",
        backgroundColor: "lightblue",
        border: "1px solid black",
        padding: "0px 10px",
        margin: "10px",
    }

    
    return(
        <div>
        <form onSubmit = {createUser}>
            {
                hasBeenSubmitted?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submite the form.</h3>
}

            <div style = {inputFormStyle}>
                <label htmlFor = "firstName">First Name: </label> 
                <input type="text" value={firstName} 
                onChange={ (e) => setFirstName(e.target.value) } />
                {firstName.length < 2 & firstName.length > 0 ?
                <p>First Name must be at least 2 charachters</p> : null
                }
            </div>
            
            
            <div style = {inputFormStyle}>
                <label htmlFor = "lastName">Last Name: </label> 
                <input type="text" value={lastName} 
                onChange={ (e) => setLastName(e.target.value) } />
                {lastName.length < 2 & lastName.length > 0 ?
                <p>Last Name must be at least 2 charachters</p> : null
                }
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor=" email">Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {email.length < 5 & email.length > 0 ?
                <p>Email must be at least 5 charachters</p> : null
                }
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor="password">Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {password.length < 8 & password.length > 0 ? 
                <p>Password must be at least 8 characters</p>
                : null}
                
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
                {confirmPassword !== password ? 
                <p>Passwords must match</p> 
                : null}
            <input type="submit" value="Create User" />

        </form>
        

        <div>
            <h2>Your Form Data</h2>

            <p>
                <label>First name:</label>{firstName}
            </p>
            <p>
                <label>Last Name:</label>{lastName}
            </p>
            <p>
                <label>Email:</label>{email}
            </p>
            <p>
                <label>Password:</label>{password}
            </p>
            <p>
                <label>Confirm Password:</label>{confirmPassword}
            </p>
        </div>
    </div>


    );
};
    
export default UserForm;