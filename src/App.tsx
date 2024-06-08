import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./utils/routes";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Products from "./pages/Products/page";
import PageNotFound from "./pages/NotFound/page";

function App() {
  const accessToken = localStorage.getItem("secret_token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={accessToken ? <Navigate to={"/"} /> : <Login />}
          />
          <Route path={`/`} element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path={`/products`} element={<Products />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
