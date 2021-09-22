import Image from 'next/image'
import {Product} from '../types/types';
import formatCurrency from '../utils/formatCurrency'



function ProductCard({productData}: {productData: Product}) {
    console.log(productData)
    return(
        <div className="col">
            <a className="card h-100" href={`/products/${productData.id}`}>
                <img src={productData.assets[0].source} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-center">{productData.name}</h2>
                    <div className="card-text text-center" dangerouslySetInnerHTML={{ __html: productData.description, }} />
                    <div className="card-text text-center">{formatCurrency(productData.variants[0].price, productData.variants[0].languageCode, productData.variants[0].currencyCode)}</div>
                    <p className="card-text text-muted">id: {productData.id}</p>
                </div>
            </a>
        </div>
    )
  }
  
  export default ProductCard
  