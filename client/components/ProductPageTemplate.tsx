import styles from '../styles/ProductPage.module.css'
import { Product } from '../types/types';
import Image from 'next/image'
import formatCurrency from '../utils/formatCurrency'

function ProductPageTemplate({productData}: {productData: Product}) {
    return(
        <div className="container">
            <h1 className="display-1">You are Viewing product {productData.name}</h1>
            <div className="row">
                <div className="col-6">
                    <img src={productData.assets[0].source} className={styles.productImg} alt="..." />
                </div>
                <div>
                    <h2 className="text-center">{productData.name}</h2>
                    <div className="text-center" dangerouslySetInnerHTML={{ __html: productData.description, }} />
                    <div className="text-center">{formatCurrency(productData.variants[0].price, productData.variants[0].languageCode, productData.variants[0].currencyCode)}</div>
                    <p className="text-muted">id: {productData.id}</p>
                </div>
                <button>Buy</button>
                <button>Add to cart</button>
            </div>
        </div>
    )
  }
  
  export default ProductPageTemplate
  