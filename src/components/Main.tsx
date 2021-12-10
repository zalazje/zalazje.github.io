import { default as React } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import Map from "./MapPage";
import Page1925 from "./Page1925";


const Main = ({config}: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="map" element={<Map config={config.map} />} />
            <Route path="1925" element={<Page1925 config={config.spreadsheets.Page1925} />} />
            <Route path="cemetery" element={<Page1925 config={config.spreadsheets.CemeteryPage} />} />
        </Routes>

    );
};

export default Main;