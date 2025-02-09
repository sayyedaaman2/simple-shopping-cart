import { useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProductRow(){
    const [quantity,setQuantity] = useState(0);
    const incrementQuantity = ()=>{
        setQuantity((prevQuantity)=> prevQuantity + 1);
    }
    const decrementQuantity = ()=>{
        if(quantity > 0){
            setQuantity((prevQuantity)=> prevQuantity - 1);
        }
    }
    return(
        <tr className="">
                <td className="border border-gray-300 p-2">
                Tea set (&#36;39.99)
                </td>
                <td className="border border-gray-300 p-2 flex justify-between items-center">
                    <Button className={'border bg-slate-900 text-white h-2 w-2 flex justify-center items-center rounded-full p-3 cursor-pointer'}
                    onHandleClick={incrementQuantity}>
                       <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                    <span>
                    {quantity}
                    </span>
                    <Button className={'border bg-slate-900 text-white h-2 w-2 flex justify-center items-center rounded-full p-3 cursor-pointer'}
                    onHandleClick={decrementQuantity}>
                    <FontAwesomeIcon icon={faMinus}/>
                    </Button>
                   
                </td>
                <td className="border border-gray-300 p-2">
                &#36;39.99 
                </td>
            </tr>
    )
}