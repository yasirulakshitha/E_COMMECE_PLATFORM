import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/home.page.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import CartPage from './pages/cart/cart.page.jsx'
import ShopPage from './pages/shop/shop.page.jsx'
import FreequentlyAskedQuestionsPage from './pages/Frequently Asked Questions/FrequentlyAskedQuestions.page.jsx'
import OnelinePaymentProcessPage from './pages/Online Payment Process/OnlinePaymentProcess.page.jsx'
import HomedeliveroptionsPage from './pages/Home delivery options/Homedeliveryoptions.page.jsx'
import CheckoutPage from "./pages/checkout/checkout.page.jsx";
import SignInPage from './pages/auth/sign-in/sign-in.page.jsx'
import SignUpPage from './pages/auth/sign-up/sign-up.page.jsx'
import PaymentPage from './pages/payment/payment.page.jsx'

import RootLayout from './layouts/root.layout.jsx'

import { ClerkProvider } from '@clerk/clerk-react'
import { Toaster } from 'sonner'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element: <HomePage />,
      },
      {
        path:"/cart",
        element: <CartPage />,
      },
      {
        path:"/shop",
        element: <ShopPage />,
      },
      {
        path:"/FAQ",
        element: <FreequentlyAskedQuestionsPage />,
      },
      {
        path:"/OPP",
        element: <OnelinePaymentProcessPage />,
      },
      {
        path:"/Delivery",
        element: <HomedeliveroptionsPage />,
      },
      {
        path:"/checkout",
        element: <CheckoutPage />,
      },
      {
        path:"/payment",
        element: <PaymentPage />,
      },
    ]
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    <Toaster richColors/>
    </ClerkProvider>
  </React.StrictMode>
);
