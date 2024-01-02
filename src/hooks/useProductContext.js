import { useContext } from "react";
import { ProductContext } from '../context/productContext';

export function useProductContext() {
    return useContext(ProductContext);
}