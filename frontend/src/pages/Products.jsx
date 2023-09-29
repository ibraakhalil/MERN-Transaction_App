import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../store/actions/productAction'
import ProductCard from '../components/ProductCard'
import './css/Products.css'



function Products() {
  const { products } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productAction())
  }, [dispatch])

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="products">
        {products.map((product) => <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>

        )}
      </div>
    </div>
  )
}

export default Products