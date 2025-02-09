import Table from "./Table/Table";
import { useCartQuery, useCartTotalProductQuery } from "../hooks/queryClient";

export default function Cart({className}){
    const {data:products} = useCartQuery()
    const {data:total} = useCartTotalProductQuery();
    

    return(
        <div className={`cart h-auto p-4 rounded-lg ${className} flex flex-col gap-3 border border-gray-300`}>
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p>
                You have <span>{products ? products.length : 0}</span> products in your cart
                </p>
            {
              (!products?.length) ? <p>
                You haven’t added anything to your shopping cart yet.
              </p>  : <Table products={products} total={total || 0}/>
            }
        </div>
    )
}