
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    
    const { productId } = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8001/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [productId]); //[ ] We  do this to eliminate the warning.

    return (
        <div className="oneProduct-component">
            <h2>{oneProduct.title}</h2>
            <p className="form-fields">Price: ${oneProduct.price}</p>
            <p className="form-fields">Description: {oneProduct.description}</p>
        </div>
    );
};

export default OneProduct;