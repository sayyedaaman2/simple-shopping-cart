import { useAddCart } from "../hooks/queryClient";
import Button from "./common/Button"
export default function ProductCard({
    id,
    title,
    price,
    description,
    image,
}) {
    const {mutate:addCart} = useAddCart();

    function addToCart(){
        const product = {
            id,
            title,
            price,
            quantity : 0,
        }
        addCart(product);

    }
    return (
        <div className="product-card bg-slate-200 border rounded-lg  w-auto p-4 flex flex-col h-auto">
           
            <div className="img-section flex-1">
                <img className="" src={image} alt="" loading="lazy" />
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