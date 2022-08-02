import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import Store from './Redux/Store';
import SideBar from './Components/SideBar';


const Gold = React.lazy(() => import('./Pages/Gold'));
const Login = React.lazy(() => import('./Pages/Login'));
const Signup = React.lazy(() => import('./Pages/SignUp'));
const Otp = React.lazy(() => import('./Pages/OTP'));
const Products = React.lazy(() =>  import ('./Pages/Products') )
const CategoryList = React.lazy(()=> import('./Pages/CategoryList'))
const ProductsByCate = React.lazy(()=> import('./Pages/ProductByCategory'))
const ProductDetail = React.lazy(() => import('./Pages/ProductDetail'));
const FavouriteProducts = React.lazy(() => import('./Pages/FavouriteProducts'));
const PrivacyPolicy1 = React.lazy(() => import('./Pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./Pages/Terms&Conditions'));
const UserNotification = React.lazy(() => import('./Pages/UserNotification'));
const ViewProfile = React.lazy(() => import('./Pages/ViewProfile'));
const UpdateProfile = React.lazy(()=> import('./Pages/UpdateProfile'))
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <BrowserRouter basename='/'>
  <Suspense>
  <Routes>
            <Route path="/jandani_jewellers" element={<App/>}/>
            <Route path="/app" element={<App/>}/>
            <Route path="/sidebar" element={<SideBar/>}/>
            <Route path="/gold" element={<Gold/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/gold/productdetail" element={<ProductDetail/>}/>
            <Route path="/otp" element={<Otp/>}/>
            <Route path="/favourite_products" element={<FavouriteProducts/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy1/>}/>
            <Route path="/terms_and_conditions" element={<TermsConditions/>}/>
            <Route path="/notifications" element={<UserNotification/>}/>
            <Route path="/view_profile" element={<ViewProfile/>}/>
            <Route path="/updateProfile" element={<UpdateProfile/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/category_list" element={<CategoryList/>}/>
            <Route path="/product_list" element={<Products/>}/>
            <Route path="/productbycate_list" element={<ProductsByCate/>}/>
        </Routes>
  </Suspense>
  </BrowserRouter>
  </Provider>
);
  



