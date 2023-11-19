import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, User, Auth, Account, Product } from "./components";

import "./styles/base.scss";
import AOS from "aos";
import CartController from "./components/Page-controller/Cart-controller";
import CheckoutController from "./components/Page-controller/Checkout-controller";
import DeliveryController from "./components/Page-controller/Delivery-controller";
import PaymentController from "./components/Page-controller/Payment-controller";
import CompletionController from "./components/Page-controller/Completion-controller";
import Dashboard from "./components/pages/dashboard";
import DashProduct from "./components/pages/dashboard/product";
import DashOrder from "./components/pages/dashboard/order";
import DashMessage from "./components/pages/dashboard/message";
import UploadFile from "./components/pages/dashboard/UploadFile";
import Wallet from "./components/pages/dashboard/Wallet";
import Refund from "./components/pages/dashboard/Refund";
import Support from "./components/pages/dashboard/Support";
import Coupon from "./components/pages/dashboard/Coupon";
import ShopSetting from "./components/pages/dashboard/ShopSetting";
import AddProduct from "./components/pages/dashboard/product/addProduct";
import { setGlobalState, useGlobalState } from "./components/common/store";
import { useGetUser } from "./helper/api-hooks/useAuth";
import NoFound from "./components/pages/404";
import isEmpty from "./utils/isEmpty";
import PreviewProduct from "./components/pages/dashboard/product/PreviewProduct";


const App = () => {
  const guest = JSON.parse(localStorage.getItem('guest'))
  AOS.init();
  const { data , refetch, status  } = useGetUser();
  useEffect(() => {
    // Getting token 
    if(status == 'success') {
      setGlobalState('user' , data)
      localStorage.setItem('shopName', data?.shop.shopName)
    }
    refetch()
  } ,[])


  const isGuest = createBrowserRouter([
    {
      path: "*",
      element: <NoFound />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/buyer",
      element: <User auth="buyer" />,
    },
    {
      path: "/user/seller",
      element: <User auth="seller" />,
    },

    {
      path: "/auth/login",
      element: <Auth auth="true" />,
    },
    {
      path: "/forgotPassword",
      element: <Account auth="forget" />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <CartController />,
    },
    {
      path: "/checkout",
      element: <CheckoutController />,
    },
    {
      path: "/checkout/delivery_info",
      element: <DeliveryController />,
    },
    {
      path: "/checkout/payment_info",
      element: <PaymentController />,
    },
    {
      path: "/checkout/completion",
      element: <CompletionController />,
    }
  ]);

  const isSeller = createBrowserRouter([
    {
      path: "*",
      element: <NoFound />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/buyer",
      element: <User auth="buyer" />,
    },
    {
      path: "/user/seller",
      element: <User auth="seller" />,
    },

    {
      path: "/auth/login",
      element: <Auth auth="true" />,
    },
    {
      path: "/forgotPassword",
      element: <Account auth="forget" />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <CartController />,
    },
    {
      path: "/checkout",
      element: <CheckoutController />,
    },
    {
      path: "/checkout/delivery_info",
      element: <DeliveryController />,
    },
    {
      path: "/checkout/payment_info",
      element: <PaymentController />,
    },
    {
      path: "/checkout/completion",
      element: <CompletionController />,
    },
    {
      path: "/seller/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/seller/products",
      element: <DashProduct />,
    },
    {
      path: "/seller/product/add",
      element: <AddProduct />,
    },
    {
      path: "/seller/preview/:slug",
      element: <PreviewProduct />,
    },
    {
      path: "/dashorder",
      element: <DashOrder />,
    },
    {
      path: "/dashmessage",
      element: <DashMessage />,
    },
    {
      path: "/uploadfile",
      element: <UploadFile />,
    },
    {
      path: "/wallet",
      element: <Wallet />,
    },
    {
      path: "/refund",
      element: <Refund />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/coupon",
      element: <Coupon />,
    },
    {
      path: "/shopsetting",
      element: <ShopSetting />,
    },
  ]);
  return (
    <>
      {isEmpty(guest) ?
        <main>
          <RouterProvider router={isGuest}></RouterProvider>
        </main>
      :
        <main>
          <RouterProvider router={isSeller}></RouterProvider>
        </main>
      }
    </>
  );
};

export default App;
