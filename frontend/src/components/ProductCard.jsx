import React from 'react'
import './css/ProductCard.css'


function ProductCard({ product }) {

  return (
    <div key={product.id} className='item'>
      <div className="product_img">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="info">
        <div>
          <h3>{product.title}</h3>
          <p>TK. {product.price * 110}</p>
        </div>
        <button>Add Cart</button>
      </div>
    </div>
  )
}

export default ProductCard