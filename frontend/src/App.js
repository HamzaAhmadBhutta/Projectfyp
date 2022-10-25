import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact></Route>
              <Route
                path="/search/:keyword"
                element={<HomeScreen />}
                exact
              ></Route>
              <Route
                path="/page/:pageNumber"
                element={<HomeScreen />}
                exact
              ></Route>
              <Route
                path="/search/:keyword/page/:pageNumber"
                element={<HomeScreen />}
                exact
              ></Route>

              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/cart/:id?" element={<CartScreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
              <Route
                path="/admin/productlist"
                element={<ProductListScreen exact />}
              ></Route>
              <Route
                path="/admin/productlist/:pageNumber"
                element={<ProductListScreen exact />}
              ></Route>

              <Route path="/register" element={<RegisterScreen />}></Route>
              <Route path="/login" element={<LoginScreen />}></Route>
              <Route path="/shipping" element={<ShippingScreen />}></Route>
              <Route path="/payment" element={<PaymentScreen />}></Route>
              <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route
                path="/admin/userlist"
                element={<UserListScreen />}
              ></Route>
              <Route
                path="/admin/user/:id/edit"
                element={<UserEditScreen />}
              ></Route>
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              ></Route>
              <Route
                path="/admin/orderList"
                element={<OrderListScreen />}
                exact
              ></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
