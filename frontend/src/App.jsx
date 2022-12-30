import React, { Suspense, lazy } from 'react'
import styles from "./style";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainHome from './components/MainHome';
import Navbar from './components/Navbar';
import NotFound from "./components/NotFound";
// import Cart from "./components/Cart";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
// import CheckoutSuccess from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Oders";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import ProductsList from "./components/admin/lists/ProductsList";
// import Product from "./components/Details/Product";
// import UserProfile from "./components/Details/UserProfile";
// import Order from "./components/Details/Order";
import AssertsOverview from './components/userAccount/AssertsOverview';
import Transections from "./components/userAccount/Transections";
import Setting from "./components/userAccount/Setting";
import DashBoard from './components/userAccount/DashBoards';
import Proposals from './components/userAccount/Proposals';
// import MainHome from './components/MainHome';
import { MarketPlace } from './components/MarketPlace';
// import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { ListProperty } from './components/userAccount/ListProperty';
import { Account } from "./components/PropRegister/steps/Account";
import { Details } from './components/PropRegister/steps/Details';
import { Final } from './components/PropRegister/steps/Final';
import Product from "./components/Details/Product";
import Order from "./components/Details/Order";
import UserProfile from "./components/Details/UserProfile";
import { ListedProperty } from './components/admin/ListedProperty';
import {ContractOwner} from './components/admin/ContractOwner';

const Home = lazy(() => import('./components/Home'));
// const safeImport = (item: Promise<any>) => item.catch((e) => { console.error(e); window.location.reload(); });
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);


  function Loading() {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <button type="button" className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white" disabled>
          <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-medium"> Processing... </span>
        </button>
      </div>
    )
  }

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <BrowserRouter>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="summary" element={<Summary />} />
            <Route path="contractowner" element={<ContractOwner />}/>
              <Route path="products" element={<Products />}>
                <Route index element={<ProductsList />} />
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="listedProperty" element={<ListedProperty />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/account" element={<DashBoard />}>
              <Route path="assertsOverview" element={<AssertsOverview />} />
              <Route path="listproperty" element={<ListProperty />} />
              <Route path="transections" element={<Transections />} />
              <Route path="setting" element={<Setting />} />
              <Route path="proposals" element={<Proposals />} />

              {/* For Property Form */}

              <Route path="/account/listproperty/step1" element={<Account />} />
              <Route path="/account/listproperty/step2" element={<Details />} />
              <Route path="/account/listproperty/step2/final" element={<Final />} />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App