import { useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Button from "../common/Button";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCartQuery, useDecrementCart, useIncrementCart } from "../../hooks/queryClient";

export default function ProductRow({
    id,
    title,
    price,
    quantity,

}){
    const {mutate:IncrementProduct} = useIncrementCart();
    const {mutate:DecrementProduct} = useDecrementCart();

    const incrementQuantity = ()=>{
        IncrementProduct(id);
    }
    const decrementQuantity = ()=>{
        DecrementProduct(id);
    }
    return(
        <tr className="">
                <td className="border border-gray-300 p-2">
                {title} (&#36;{price})
                </td>
                <td className="border border-gray-300 p-2  flex justify-between items-stretch">
                    <Button className={'border bg-slate-900 text-white h-2 w-2 flex justify-center items-center rounded-full p-3 cursor-pointer'}
                    onHandleClick={incrementQuantity}>
                       <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                    <div>
                    {quantity}
                    </div>
                    <Button className={'border bg-slate-900 text-white h-2 w-2 flex justify-center items-center rounded-full p-3 cursor-pointer'}
                    onHandleClick={decrementQuantity}>
                    <FontAwesomeIcon icon={faMinus}/>
                    </Button>
                   
                </td>
                <td className="border border-gray-300 p-2">
                &#36;{
                    (quantity * price).toFixed(2)
                } 
                </td>
            </tr>
    )
}