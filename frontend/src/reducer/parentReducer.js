import { combineReducers } from "@reduxjs/toolkit";
import { web3Reducer } from "../slices/web3ContractSlice";
import productsReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import { productsApi } from "../slices/productsApi";
import UsersSlice from "../slices/UsersSlice";
import ordersSlice from "../slices/ordersSlice";
import personaldbReducer from "../slices/personalSlice";
import  {personaldbApi}  from "../slices/personalApi";
import propertiesdbReducer from "../slices/propertySlice";
import {propertiesdbApi} from "../slices/propertyApi";
import { adminReducers } from "../slices/adminEventSlice";

const parentReducer = combineReducers({
    web3Connect : web3Reducer,
    AdminAddress: adminReducers,
    products: productsReducer,
    users: UsersSlice,
    orders: ordersSlice,
    cart: cartReducer,
    auth: authReducer,
    personaldb: personaldbReducer,
    propertiesdb:propertiesdbReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [personaldbApi.reducerPath]: personaldbApi.reducer,
    [propertiesdbApi.reducerPath]: propertiesdbApi.reducer,
})

export default parentReducer;