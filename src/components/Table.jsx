import ProductRow from "./ProductRow";

export default function Table({products}){
    return(
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
            <ProductRow/>
        </tbody>
        <tfoot>
            <tr className=" text-right">
                <td colSpan={3} className="border border-gray-300 p-2">
                    Total price: &#36; 74.98
                </td>
            </tr>
        </tfoot>
    </table>
    )
}