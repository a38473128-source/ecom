import style from "./Products.module.css"

import {products} from "../data/products"
import ProductInfo from "../Components/ProductInfo"

export default function Products(){
    return(
        <section id="Products" className={style.products}>
            <h2>Nos Products ...</h2>
            <div className={style.grid}>
                {products.map((p)=>(
                    <ProductInfo key={p.id} info={p}></ProductInfo>
                ))}
            </div>
        </section>
    )
}