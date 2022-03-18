import React, { useState} from 'react';

const Personcard = (props) => {
    const [age, setAge] = useState(props.age);
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            
            <h4> Age: {age}</h4>
            <h4> Hair Color: {props.hairColor}</h4>
            <button onClick={ (event) => setAge(age + 1)}>Birthday Button for {props.firstName }</button>
        </div>
    )
}

export default Personcard;
