import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
    
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { productList, setProductList} = props;


    useEffect(() => {
        axios.get("http://localhost:8001/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <hr />
            <h2>
                All Products:
            </h2>
            { 
                productList.map((product, index) => (
                    <div className = "productListClass" key={index}>

                        <Link to={`/products/${product._id}`} className="productListLink">
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default AllProducts;