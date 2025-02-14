import TYPES from "./actionTypes";

export const productsInitialState = {
    products: [
        {
            "id": 1,
            "name": "product 1",
            "price": 50,
        },
        {
            "id": 2,
            "name": "product 2",
            "price": 100,
        },
        {
            "id": 3,
            "name": "product 3",
            "price": 150,
        },
        {
            "id": 4,
            "name": "product 4",
            "price": 200,
        },
        {
            "id": 5,
            "name": "product 5",
            "price": 250,
        },
        {
            "id": 6,
            "name": "product 6",
            "price": 300,
        },
    ],
    cart: [],
    totalPrice: 0,
}

export const reducerCart = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newProduct = state.products.find((product) => product.id === action.payload)
            return {
                ...state,
                cart: [...state.cart, newProduct]
            }
        }
        case TYPES.DELETE_PRODUCT_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        }
        case TYPES.DELETE_ALL_FROM_CART: {
            return productsInitialState;
        }
        case TYPES.CALCULATE_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
            }
        }
        default:
            return state;
    }

    throw Error("Unknown action: " + action.type)
}