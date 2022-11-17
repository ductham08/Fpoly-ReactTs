import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/product";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<h1>Home page</h1>}></Route>
                <Route path="product" element={<Product />}></Route>
            </Routes>
        </div>
    );
}

export default App;
