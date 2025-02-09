import { useMutation, useQuery as useReactQuery, useQueryClient } from "@tanstack/react-query";
import { decreaseProductCart, deleteCart, fetchCart, fetchProducts, getTotalCartValue, increaseProductCart, postCart } from "../api";

export function useProductQuery() {
    const queryClient = useQueryClient();

    const query = useReactQuery({
        queryKey: ['product'],
        queryFn: fetchProducts
    });
    // const mutation = useMutation({
    //     mutationFn: fetchProducts, // add post method
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ['product'] });
    //     },
    // });
    return {

        queryClient, query
    }
}

export function useCartQuery() {
    const queryClient = useQueryClient();

    const query = useReactQuery({
        queryKey: ['cart'],
        queryFn: fetchCart
    });
    const addCart = useMutation({
        mutationFn: postCart, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });

    const increaseQuantity = useMutation({
        mutationFn:increaseProductCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });

    const decreaseQuantity = useMutation({
        mutationFn: decreaseProductCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
    const getTotal = useMutation({
        mutationFn : getTotalCartValue,
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey : ['cart']})
        }
    })

    const deleteItem = useMutation({
        mutationFn: deleteCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
    return {

        queryClient, query, addCart,increaseQuantity,decreaseQuantity,deleteItem,getTotal
    }
}
