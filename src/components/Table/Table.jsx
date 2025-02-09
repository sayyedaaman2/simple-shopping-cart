
import ProductRow from "./ProductRow";

export default function Table({products, total}){

    
    return(
        <>
            <table className="border-collapse border border-gray-300 p-2">
            <thead>
                <tr className="">
                    <th className="border border-gray-300 p-2">
                        Product
                    </th>
                    <th className="border border-gray-300 p-2">
                        Quantity
                    </th>
                    <th className="border border-gray-300 p-2">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((cart)=>(
                        <ProductRow id={cart.id} key={cart.id} title={cart.title} price={cart.price} quantity={cart.quantity}/>
                    ))
                }
            </tbody>
            <tfoot>
                <tr className=" text-right">
                    <td colSpan={3} className="border border-gray-300 p-2">
                        Total price: &#36;{(total).toFixed(2)}
                    </td>
                </tr>
            </tfoot>
        </table> 
        
        </>
    )
}