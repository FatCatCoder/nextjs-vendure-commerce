import styles from '../styles/ProductPage.module.css'
import {Product} from '../types/types';
import Image from 'next/image'

function ProductPage({productData}: {productData: Product}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={productData.assets[0].source} className={styles.productImg} alt="..." />
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
  }
  
  export default ProductPage
  