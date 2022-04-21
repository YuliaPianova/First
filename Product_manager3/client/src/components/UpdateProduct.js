import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) => {
    const { productId } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const [headerTitle, setHeaderTitle] = useState(""); // to prevent {headerTitle} in  <h2>Edit {headerTitle}</h2> changing every time we type.

    
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${productId}`)  // pre-populate inputs in edit form we use findOne request
                .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setHeaderTitle(res.data.title);
            })
            .catch((err) => console.log(err));
    }, [productId]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8001/api/products/${productId}`, { //id is the req.params and the following object is the req.body
                title:title,
                price: price,
                description: description
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");  //navigate will trigger rerender of Main/DisplayAll which will update our list via useEffect in Display
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>Edit {headerTitle}</h2>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
    
                <input class="submit-input" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;