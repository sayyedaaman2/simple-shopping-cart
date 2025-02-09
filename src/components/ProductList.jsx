import ProductCard from "./ProductCard";

export default function ProductList({className}){
    return(
          
        <div className={`product-list grid grid-cols-2 gap-2 md:grid-cols-3  lg:gap-4 col-start-1 col-end-2 ${className}`}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>   <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
   
    )
}