import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props) => {
    const { anyWord, anyColor, backGroundColor } = useParams();

    return (
        <div>
            {isNaN(anyWord) ?
                <h1 style={anyColor ?
                    {color: anyColor, backgroundColor: backGroundColor}
                    : null}> The Word is: {anyWord}
                </h1>

            : <h1> The Number is: {anyWord}</h1>
            }

        </div>
    )
}

export default ParamsComponent;