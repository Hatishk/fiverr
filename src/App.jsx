import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import SingleMessage from "./pages/singleMessage/SingleMessage";
import MyGigs from "./pages/myGigs/MyGigs";
import "./App.scss";

function App() {
  <>
  
  </>
  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/order",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/singlemessage/:id",
          element: <SingleMessage/>
        },

      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
