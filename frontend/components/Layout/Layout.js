import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, isHome }) => {
  return (
    <>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
