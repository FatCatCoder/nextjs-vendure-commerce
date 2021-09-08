import ProductCard from "./ProductCard"

function Products({productsData}) {

  return(
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {productsData.products.items.map(x => <ProductCard key={x.id} productData={x} />)}
      </div>
  )
}

export default Products
