import React from "react";



function ProductCard({ imageUrl, info }) {
    return (
        <div  className={"product-card"}  >
            <div>
                <h5>{ info.name }</h5>
                <img src={imageUrl} style={{height:150, width:100}} />
                <h6>${ info.price }</h6>
            </div>
        </div>
    );
}


export default ProductCard;
