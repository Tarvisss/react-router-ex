import React from "react";
import AddColor from "./AddColor";
// import ColorDetails from "./ColorDetails";

import { Route, Routes } from "react-router-dom";
import FilterColors from "./FilterColors";

const RouteList = () => {

    return (
        <Routes>
            <Route path="/" element={<AddColor/>}/>
            <Route path="/color/:name" element={<FilterColors/>} />
        </Routes>
    )
}

export default RouteList;