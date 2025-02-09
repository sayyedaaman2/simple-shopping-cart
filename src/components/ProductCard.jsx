import { useCartQuery } from "../hooks/queryClient"
import Button from "./common/Button"
export default function ProductCard({
    id,
    title,
    price,
    description,
    image,
}) {
    const {addCart} = useCartQuery();

    function addToCart(){
        console.log("add to cart")
        addCart.mutate({
            id,
            title,
            price,
            quantity : 0,
        });

    }
    return (
        <div className="product-card bg-slate-200 border rounded-lg h-auto w-auto p-4 flex flex-col ">
            <div className="img-section flex-1">
                <img src={image} alt="" loading="lazy" />
            </div>
            <div className="content-section flex flex-col gap-2">
                <p className="text-md lg:text-xl">
                    {title}
                </p>
                <p className="h-12 overflow-hidden">
                    {description}
                </p>
                <p className="text-sm">
                    &#36;<span>{price}</span>
                </p>
                <div className="actions">
                    <Button onHandleClick={addToCart} className={"text-sm lg:text-md border px-3 py-1 rounded-md bg-slate-900 text-white hover:bg-slate-100 hover:text-slate-900 cursor-pointer"}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}