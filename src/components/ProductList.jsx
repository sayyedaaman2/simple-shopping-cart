import ProductCard from "./ProductCard";
import { useProductQuery } from "../hooks/queryClient";
import { Fragment } from "react";
import Button from "./common/Button";
export default function ProductList({className}){
    const {data,fetchNextPage,hasNextPage,isFetching,isFetchNextPage,status} = useProductQuery()
    
  
    return(
        status === 'pending' ? (
            <p>Loading...</p>
          ) : status === 'error' ? (
            <p>Error: {error.message}</p>
          ) :
          
        <div className={`product-list grid grid-cols-1 gap-4 md:grid-cols-2  lg:gap-4 col-start-1 col-end-2 ${className}`}>
            {
                data?.pages?.map((group,i)=>(
                    <Fragment key={i}>
                        {
                            group.products.map((product)=>(

                                <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} image={product.images}/>
                            ))
                        }
                    </Fragment>

                ))
            }
            <div className="col-span-full flex justify-center my-4 ">
               <Button className={'border px-4 py-2 rounded-lg bg-slate-900 text-white cursor-pointer'} onHandleClick={fetchNextPage} disabled={!hasNextPage || isFetchNextPage}>
                {
                    isFetchNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'
                }
               </Button>
            </div>
            {/* <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div> */}
        </div>
   
    )
}