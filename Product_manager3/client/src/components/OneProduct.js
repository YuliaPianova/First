
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    
    const { productId } = useParams();
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${productId}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [productId]); //[ ] We  do this to eliminate the warning.

    const deleteHandler = () => {
        axios.delete(`http://localhost:8001/api/products/${productId}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="oneProduct-component">
            <h2>{oneProduct.title}</h2>
            <p className="form-fields">Price: ${oneProduct.price}</p>
            <p className="form-fields">Description: {oneProduct.description}</p>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={() => navigate('/')}>Home </button>
        </div>
    );
};

export default OneProduct;