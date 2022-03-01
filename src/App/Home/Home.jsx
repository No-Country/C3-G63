import React, { useContext} from "react";
import { Context } from "../../store/auth-context";
import './home.module.scss';
import Header from "../components/Header/Header";
import TablaRegistro from "../components/TablaRegistro.jsx/TablaRegistro";

const Home = () => {
    const {user} = useContext(Context);
    console.log(user?.email);
    
    return(
        <div>
            <Header />
            <TablaRegistro />
        </div>
    );
}

export default Home;