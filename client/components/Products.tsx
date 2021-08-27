import ProductCard from "./ProductCard"

function Products({productsData}) {

  return(
      <div className="container">
        {productsData.products.items.map(x => <ProductCard productData={x} />)}
      </div>
  )
}

export default Products
