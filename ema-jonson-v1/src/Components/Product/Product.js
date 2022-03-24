import React from 'react';
import { BsFillCartPlusFill} from "react-icons/bs";
import './Product.css'
const Product = (props) => {
    const {handleAddtoCart,product}=props
    const {name,img,price,seller,ratings}=product
  
    // console.log(props.product)
// console.log(props);
   
    return (
        <div className='product'>
            <img src={img} alt='Product'></img>
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p><small>Price:${price}</small></p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>

            </div>
            <button onClick={()=>handleAddtoCart(product)} className='btn-cart'>
                <p>Add to cart</p><BsFillCartPlusFill className='cart-icon'></BsFillCartPlusFill>
                
            </button>
        </div>
    );
};

export default Product;