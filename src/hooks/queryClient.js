import { useMutation,useInfiniteQuery, useQuery as useReactQuery, useQueryClient, useQuery } from "@tanstack/react-query";
import { decreaseProductCart, deleteCart, fetchCart, fetchProducts, getTotalCartValue, increaseProductCart, postCart } from "../api";

export function useProductQuery() {
    
    return useInfiniteQuery({
        queryKey : ["product"],
        queryFn : fetchProducts,
        initialPageParam: 0,
        getNextPageParam: (_lastPage,pages)=> {
            const totalProduct = Math.floor(pages[0].total /6);
            if(pages.length < totalProduct ){
                return pages.length + 1;
            }else{
                return undefined;
            }
        }
    });
}
export function useCartQuery(){
    return useQuery({
        queryKey : ['cart'],
        queryFn : fetchCart
    })
}
export function useCartTotalProductQuery(){
    return useQuery({
        queryKey : ['cart-total'],
        queryFn : getTotalCartValue
    })
}
export function useAddCart(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : postCart,
        onSuccess: ()=>{
            queryClient.invalidateQueries('cart')
        }
    })
}
export function useIncrementCart(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : increaseProductCart,
        onSuccess: ()=>{
            queryClient.invalidateQueries('cart')
        }
    })
}
export function useDecrementCart(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : decreaseProductCart,
        onSuccess: ()=>{
            queryClient.invalidateQueries('cart')
        }
    })
}