

export const fetchProducts = ({ pageParam=1 }) => {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/products?limit=6&skip=${pageParam * 3}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));


    });
}

export const fetchCart = () => {
    return new Promise((resolve) => {
        const cart = localStorage.getItem('cart');
        resolve(JSON.parse(cart));
    })
}


export const postCart = (product) => {
    return new Promise((resolve, reject) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let productExists = false;
            let updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    item.quantity = (item.quantity || 0) + (product.quantity || 1);
                    productExists = true;
                }
                return item;
            });
            if (!productExists) {
                updatedCart.push({
                    ...product,
                    quantity: 1,
                });
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            resolve(updatedCart);
        } catch (error) {
            reject(error);
        }
    });
}
export const deleteCart = (productId) => {
    return new Promise((resolve, reject) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let updateCart = cart.filter((product) => product.id !== productId);
            localStorage.setItem('cart', JSON.stringify(updateCart));
            resolve(updateCart);
        } catch (error) {
            reject(error);
        }
    })
}
export const increaseProductCart = (productId) => {
    return new Promise((resolve, reject) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let updatedCart = cart.map((product) => {
                if (product.id === productId) {
                    product.quantity = (product.quantity || 0) + 1;
                }
                return product;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            resolve(updatedCart);
        } catch (error) {
            reject(error);
        }
    })
}


export const decreaseProductCart = (productId) => {
    return new Promise((resolve, reject) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let updatedCart = cart.map((product) => {
                if (product.id === productId) {
                    product.quantity = (product.quantity || 0) - 1;
                }
                return product;
            }).filter(product => product.quantity > 0);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            resolve(updatedCart);
        } catch (error) {
            reject(error);
        }
    });
}

export const getTotalCartValue = () => {
    return new Promise((resolve, reject) => {
        try {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let totalValue = cart.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);
            resolve(totalValue);
        } catch (error) {
            reject(error);
        }
    });
}

