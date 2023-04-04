import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "../components/Services";
import AddService from "../components/AddService";

const Dashboard = () => {
    return (
        <div>
            <AddService />
        </div>
    );
};

export default Dashboard;
