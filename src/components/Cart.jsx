import Table from "./Table";

export default function Cart({className}){
    return(
        <div className={`cart h-auto p-4 rounded-lg ${className} flex flex-col gap-3 border border-gray-300`}>
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p>
                You have <span>{3}</span> products in your cart
            </p>
            <Table/>
        </div>
    )
}