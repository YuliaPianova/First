import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ confirmPassword, setConfirmPassword] = useState("");

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
        <form>
            <div style = {inputFormStyle}>
                <label htmlFor = "firstName">First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor = "lastName">Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor=" email">Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor="password">Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div style = {inputFormStyle}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="confirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>

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