import ProductCard from "./ProductCard";
import { useProductQuery } from "../hooks/queryClient";
export default function ProductList({className}){
    const {query} = useProductQuery()
    console.log("queyr",query)
    return(
          
        <div className={`product-list grid grid-cols-2 gap-2 md:grid-cols-3  lg:gap-4 col-start-1 col-end-2 ${className}`}>
            {
                query.data?.products?.map((product)=>(
                    <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} image={product.images}/>

                ))
            }
            
           
        </div>
   
    )
}