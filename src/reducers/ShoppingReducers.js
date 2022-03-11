
import { TYPES } from "../actions/shoppingActions"

export const shoppingInitialState = {
    products: [
        { id: 1, type: "A1", model: "A1-100", price: 100 },
        { id: 2, type: "A1", model: "A1-200", price: 150 },
        { id: 3, type: "A1", model: "A1-300", price: 20 },
        { id: 4, type: "A2", model: "A2-100", price: 50 },
        { id: 5, type: "A2", model: "A2-300", price: 25 },
        { id: 6, type: "B1", model: "B1-005", price: 42 },
        { id: 7, type: "B1", model: "B1-010", price: 75 },
        { id: 8, type: "B1", model: "B1-020", price: 100 },
        { id: 9, type: "B2", model: "B2-001", price: 200 },
        { id: 10, type: "B2", model: "B2-002", price: 150 },
        { id: 11, type: "B3", model: "B3-1000", price: 1000 },
        { id: 12, type: "B3", model: "B3-2000", price: 1500 },

    ],
    cart: [],
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                product => product.id === action.payload
                )
            console.log(newItem);
            return ({
                ...state,
                cart: [...state.cart, newItem]
            })
        }

        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }
        default:
            return state;
    }
}