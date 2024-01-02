import { createContext, useReducer } from "react";
import data from '../store';

export const ProductContext = createContext();

const initialState = {
    productData: [...data],
    productDetails: {},
    productsInCard: [],
    quantity: 1,
    getQuantity: 1,
    observation: {
        value: '',
        confirmObservation: false,
    },
    total: 0,
    showAnimatedCardToast: false,
}

export const actions = {
    setCurrentQuantity: 'setCurrentQuantity',
    removeItemFromProductsInCard: 'removeItemFromProductsInCard',
    getProductDetailsById: 'getProductDetailsById',
    addProductInCard: 'addProductInCard',
    increaseQuantity: 'addQuantity',
    decreaseQuantity: 'decreaseQuantity',
    onChangeText: 'onChangeText',
    observ: 'observ',
    resetQuantityAndObservation: 'resetQuantityAndObservation',
    addObservation: 'addObservation',
    cancelObservation: 'cancelObservation',
    observationValue: 'observationValue',
    getTotal: 'getTotal',
    changeAnimatedCardToastValue: 'changeAnimatedCardToastValue',

}

function reducer(state, action) {
    switch (action.type) {
        case actions.getProductDetailsById:
            const productDetails = state.productData.filter((product) => product.id === action.id);

            return {
                ...state,
                productDetails: { ...productDetails[0] }
            }
        case actions.addProductInCard:
            const newProductDetails = { ...state.productDetails, quantity: state.quantity, observation: state.observation, buy: true }
            return {
                ...state,
                showAnimatedCardToast: true,
                productsInCard: [{ ...newProductDetails }, ...state.productsInCard]
            }
        case actions.changeAnimatedCardToastValue:
            return {
                ...state,
                showAnimatedCardToast: false,
            }
        case actions.increaseQuantity:
            if (state.quantity >= 100) {
                return {
                    ...state,
                    quantity: 100,
                }
            } else {
                return {
                    ...state,
                    quantity: state.quantity + 1,
                }
            }
        case actions.decreaseQuantity:
            if (state.quantity > 1) {
                return {
                    ...state,
                    quantity: state.quantity - 1,
                }
            } else {
                return {
                    ...state,
                }
            }
        case actions.onChangeText:
            if (action.text < 1) {
                return {
                    ...state,
                    quantity: 1,
                }
            } else if (action.text > 100) {
                return {
                    ...state,
                    quantity: 100,
                }
            } else {
                return {
                    ...state,
                    quantity: Number(action.text),
                }
            }
        case actions.observationValue:
            return {
                ...state,
                observation: {
                    ...state.observation,
                    value: action.text,
                },
            }
        case actions.addObservation:
            return {
                ...state,
                observation: {
                    ...state.observation,
                    confirmObservation: true,
                },
            }
        case actions.cancelObservation:
            if (state.observation.confirmObservation === true) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                    observation: {
                        ...state.observation,
                        value: '',
                    },
                }
            }
        case actions.resetQuantityAndObservation:
            return {
                ...state,
                quantity: 1,
                observation: '',
            }
        case actions.getTotal:
            let value = 0
            state.productsInCard.forEach(product => {
                const price = product.price
                const quantity = product.quantity
                value += quantity * price;
            });

            return {
                ...state,
                total: value,
            }
        case actions.removeItemFromProductsInCard:
            const newList = state.productsInCard.filter((_, index) => index !== action.id)

            let newValue = 0
            newList.forEach(product => {
                const price = product.price
                const quantity = product.quantity
                newValue += quantity * price;
            });

            return {
                ...state,
                productsInCard: [...newList],
                total: newValue,
            }
        case actions.setCurrentQuantity:
            const setNewQuantityValue = state.productsInCard.map((product, index) => {
                if (index === action.index) {
                    return { ...product, quantity: action.currentQuantity }
                }
                return product;
            })

            let nValue = 0
            setNewQuantityValue.forEach(product => {
                const price = product.price
                const quantity = product.quantity
                nValue += quantity * price;
            });

            return {
                ...state,
                productsInCard: [...setNewQuantityValue],
                total: nValue,
            }
        default: 'This type do not exist'
    }
}

export function ProductProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}