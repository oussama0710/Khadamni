import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "../components/Services";
import AddService from "../components/AddService";

const Dashboard = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/add" element={<AddService />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Dashboard;
