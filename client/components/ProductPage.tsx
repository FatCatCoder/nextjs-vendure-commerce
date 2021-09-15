import styles from '../styles/ProductPage.module.css'
import {Product} from '../types/types';
import Image from 'next/image'


function ProductPage({productData}: {productData: Product}) {
    //console.log(productData)
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={productData.assets[0].source} className={styles.productImg} alt="..." />
                </div>
                <div className="col-6"></div>
            </div>
            {/*
            <div className="card" href={`/products/${productData.id}`}>
                <img src={productData.assets[0].source} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title text-center">{productData.name}</h2>
                    <div className="card-text text-center" dangerouslySetInnerHTML={{ __html: productData.description, }} />
                    <div className="card-text text-center">${productData.variants[0].price}</div>
                    <p className="card-text text-muted">id: {productData.id}</p>
                </div>
            </div>
            */}
        </div>
    )
  }
  
  export default ProductPage
  