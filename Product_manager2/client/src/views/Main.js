
import React, { useState } from "react";
import CreateNewProduct from "../components/CreateProductComponent";
import AllProducts from "../components/AllProducts";

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);

    return (
        <div>
            
            <CreateNewProduct
                productList={productList}
                setProductList={setProductList} />
                        
            <AllProducts
                productList={productList}
                setProductList={setProductList} />
            
        </div>
    );
};

export default Main;