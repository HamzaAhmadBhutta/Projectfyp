import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact></Route>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/product/:id?" element={<CartScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
