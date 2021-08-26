

function ProductCard({product}) {
    console.log(product)
    return(
        <div className="card container col-4">
            <img src={product.assets[0].source} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
            <h2 className="card-title text-center">{product.name}</h2>
            <div className="card-text" dangerouslySetInnerHTML={{ __html: product.description, }} />
            <p className="card-text text-muted">id: {product.id}</p>
            </div>
        </div>
    )
  }
  
  export default ProductCard
  