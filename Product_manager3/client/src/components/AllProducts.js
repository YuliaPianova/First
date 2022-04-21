import React, { useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const AllProducts = (props) => {
    
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { productList, setProductList} = props;
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8001/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []); 

    const deleteOneProduct = (deleted_Product_Id) => {   // id from axios.delete() below

        axios.delete(`http://localhost:8001/api/products/${deleted_Product_Id}`)
            .then((res) => {
                console.log(res.data);
    
                const newList = productList.filter((product, index) => product._id !== deleted_Product_Id) // return and show instantly product list WITHOUT deleted product in the browser
                setProductList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <div>
            <hr />
            <h2>
                All Products:
            </h2>
            { 
                productList.map((product, index) => (
                    <div className = "productListClass" key={index}>

        
                        <Link to={`/products/${product._id}`} className="productListLink">{product.title}</Link>

                        
                        <button onClick={() => navigate(`/products/edit/${product._id}`)}>Edit</button>
                    

                        <button onClick={() => deleteOneProduct(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;