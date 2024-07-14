import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className=" h-screen w-full container overflow-x-hidden overflow-y-auto">
        <div className="z-10">
          <Header />
        </div>

        <div className=" relative">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}
