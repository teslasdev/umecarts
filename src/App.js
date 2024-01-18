import React, { useContext, useEffect } from "react";
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
import Setting from "./components/pages/dashboard/Setting";
import AddProduct from "./components/pages/dashboard/product/addProduct";
import { setGlobalState } from "./components/common/store";
import { useGetUser } from "./helper/api-hooks/useAuth";
import NoFound from "./components/pages/404";
import isEmpty from "./utils/isEmpty";
import PreviewProduct from "./components/pages/dashboard/product/PreviewProduct";
import BuyerDashboard from "./components/pages/dashboard/buyer";
import { errorToast } from "./components/common/CustomToast";
import { GlobalContext } from "./context";
import Buyerorder from "./components/pages/dashboard/buyer/Buyerorder";
import Buyermessage from "./components/pages/dashboard/buyer/Buyermessage";
import BuyerWallet from "./components/pages/dashboard/buyer/BuyerWallet";
import BuyerSupport from "./components/pages/dashboard/buyer/BuyerSupport";
import BuyerRefund from "./components/pages/dashboard/buyer/BuyerRefund";
import Category from "./components/pages/Category";
import CartgoryProduct from "./components/pages/CartgoryProduct";
import SellerPreview from "./components/pages/SellerPreview";
import SellerPageForRegBuyer from "./components/pages/SellerPageForRegBuyer";

const App = () => {
  AOS.init();
  const { data, refetch, status, error } = useGetUser();
  const { userData, setToken, setData, isAuth, setAuth, isBuyer, setBuyer } =
    useContext(GlobalContext);
  useEffect(() => {
    // Getting token
    if (data?.user) {
      setData(data);
      setToken(true);
      setAuth(true);
      if (isEmpty(data?.shop)) {
        setBuyer(true);
      }
    }
    setToken(false);

  }, [data, error, status, refetch]);

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
      path: "/product/:slug",
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
      path: "/category_main",
      element: <Category />,
    },
    {
      path: "/category_prod",
      element: <CartgoryProduct />,
    },
    {
      path: "/seller-preview",
      element: <SellerPreview />,
    },
    {
      path: "/seller-preview-reg-buyer",
      element: <SellerPageForRegBuyer />,
    },
  ]);
  const isBuy = createBrowserRouter([
    {
      path: "*",
      element: <NoFound />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/buyer/dashboard",
      element: <BuyerDashboard data={data} />,
    },
    {
      path: "/user/buyer",
      element: <User auth="buyer" />,
    },
    {
      path: "/orders",
      element: <Buyerorder />,
    },
    {
      path: "/messages",
      element: <Buyermessage />,
    },
    {
      path: "/wallets",
      element: <BuyerWallet />,
    },
    {
      path: "/support",
      element: <BuyerSupport />,
    },
    {
      path: "/refund",
      element: <BuyerRefund />,
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
      path: "/product/:slug",
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
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/category_main",
      element: <Category />,
    },
    {
      path: "/category_prod",
      element: <CartgoryProduct />,
    },
  ]);

  const isSeller = createBrowserRouter([
    {
      path: "*",
      element: <NoFound />,
    },
    {
      path: "/",
      element: <Dashboard data={data && data} />,
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
      path: "/product/:slug",
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
      element: <Dashboard data={data && data} />,
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
      path: "/setting",
      element: <ShopSetting />,
    },
  ]);
  return (
    <>
      {!isAuth ? (
        <main>
          <RouterProvider router={isGuest}></RouterProvider>
        </main>
      ) : isBuyer ? (
        <main>
          <RouterProvider router={isBuy}></RouterProvider>
        </main>
      ) : (
        <main>
          <RouterProvider router={isSeller}></RouterProvider>
        </main>
      )}
    </>
  );
};

export default App;
