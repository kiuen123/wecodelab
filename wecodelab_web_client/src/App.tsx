import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HeartDisease from "./features/he/HeartDisease";
import Home from "./features/homepage/Home";

const APP = styled.div`
    font-size: 16px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
`;

function App() {
    return (
        <APP>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/he/heartdisease" element={<HeartDisease />} />
                </Routes>
            </BrowserRouter>
        </APP>
    );
}

export default App;
