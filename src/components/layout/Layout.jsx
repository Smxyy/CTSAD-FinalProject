import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./layout.css";
export default function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar className="navbar" />
      </header>
      <main className="mx-auto w-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
