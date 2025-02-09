import Table from "./Table/Table";
import { useCartQuery } from "../hooks/queryClient";
import { useEffect } from "react";

export default function Cart({className}){
    const {query,getTotal} = useCartQuery()
    
   
    
    useEffect(()=>{
        getTotal.mutate()
    },[query])
    return(
        <div className={`cart h-auto p-4 rounded-lg ${className} flex flex-col gap-3 border border-gray-300`}>
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p>
                You have <span>{query.data ? query.data.length : 0}</span> products in your cart
                </p>
            {
              (!query.data?.length) ? <p>
                You haven’t added anything to your shopping cart yet.
              </p>  : <Table products={query.data} total={(getTotal.data || 0)}/>
            }
        </div>
    )
}