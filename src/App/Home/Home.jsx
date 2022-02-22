import React from "react";
import './home.scss';
import Header from "../components/Header/Header";
import TablaRegistro from "../components/TablaRegistro.jsx/TablaRegistro";

const Home = () => {
    return(
        <div>
            <Header />
            <TablaRegistro />
        </div>
    );
}

export default Home;