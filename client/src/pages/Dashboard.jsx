import React from "react";
import AddService from "../components/AddService";
import Services from "../components/Services";

const Dashboard = () => {
    return (
        <div>
            <AddService />
            <Services />
        </div>
    );
};

export default Dashboard;
