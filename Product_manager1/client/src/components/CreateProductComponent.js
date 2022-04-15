
import React, { useState } from "react";
import axios from "axios";

const CreateNewProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => { 
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", { 
            title: title, 
            price: price, 
            description: description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>

            <h2>
                Create New Product 
            </h2>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title:  </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                

                <div className="form-fields">
                    <label>Price:  </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                

                <div className="form-fields">
                    <label>Description:  </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                
                
                <input className="submit-input" type="submit" value="Create Product" />
            </form>
        </div>
    );
};

export default CreateNewProduct;