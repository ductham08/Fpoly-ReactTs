import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail_product from "./components/detail_product";
import Product from "./components/product";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<h1>Home page</h1>}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="product/:id" element={<Detail_product />}></Route>
            </Routes>
        </div>
    );
}

export default App;
