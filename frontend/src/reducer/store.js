import { configureStore } from "@reduxjs/toolkit";
import parentReducer from "./parentReducer";
import {productsApi} from "../slices/productsApi";
import  {personaldbApi}  from "../slices/personalApi";
import {useSelector ,useDispatch} from 'react-redux';



const store = configureStore({
    reducer: parentReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(productsApi.middleware).concat(personaldbApi.middleware),

})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export default store;