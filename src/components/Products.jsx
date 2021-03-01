import ProductCard from "./Product-card";
import React from "react";

const getInitialProducts = () => {
    const res = [];
    for (let i=0; i < 6; i++) {
        res.push({
            id: i,
            imageUrl: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
            info: {name: "Winter Jacket", price: 99.99}
        });
    }
    return res;
};

const Products = () => {
    const initialProducts = getInitialProducts();
    return (
        <div className={"products"}>
            {initialProducts.map(product => <ProductCard key={product.id} imageUrl={product.imageUrl}
                                                         info={product.info}  />) }

        </div>
    )
};

export default Products;
