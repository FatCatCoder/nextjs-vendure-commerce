//new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format()

function ProductCard({productData}) {
    //console.log(productData)
    return(
        <div className="col">
            <div className="card container h-100">
                <img src={productData.assets[0].source} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-center">{productData.name}</h2>
                    <div className="card-text text-center" dangerouslySetInnerHTML={{ __html: productData.description, }} />
                    <div className="card-text text-center">${productData.variants[0].price}</div>
                    <p className="card-text text-muted">id: {productData.id}</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default ProductCard
  