import Button from "./Button"
export default function ProductCard() {
    return (
        <div className="product-card bg-slate-200 border rounded-lg h-auto w-auto p-4 flex flex-col ">
            <div className="img-section flex-1">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="content-section flex  flex-col gap-2">
                <p className=" text-md lg:text-xl">
                    Little Nap Coffee Beans
                </p>
                <p className="text-sm">
                    &#36;  <span>18,00</span>
                </p>
                <div className="actions">
                    <Button className={"text-sm lg:text-md  border px-3 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer"}>
                        Add to Cart
                    </Button>
                </div>
            </div>

        </div>
    )
}