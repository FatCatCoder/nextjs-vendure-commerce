import ProductCard from "./ProductCard"

function Products({propData}) {

  return(
      <div className="container">
        {propData.products.items.map(x => <ProductCard product={x} />)}
      </div>
  )
}

export default Products
