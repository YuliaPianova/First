import React from 'react';

const Personcard = (props) => {
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            
            <h4> Age: {props.age}</h4>
            <h4> Hair Color: {props.hairColor}</h4>
        </div>
    )
}

export default Personcard;
