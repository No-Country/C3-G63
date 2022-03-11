import React, {useEffect, useState, useContext} from 'react';
import axios from "../../Components/api/apicrypto"
import Cards from '../../Components/UI/Cards';
import styles from "./WalletPage.module.css"
import { Context } from '../../store/auth-context';
import { doc, getDoc, where } from 'firebase/firestore';

const WalletPage = () => {

    const [data, setData] = useState([]);
    const { user, db } = useContext(Context);

    useEffect(() => {

        const filterData = async () => {

            let outputData = [];

            // Data de firebase JSON
            const fetchedData = await axios.get("https://nc-g63-default-rtdb.firebaseio.com/crypto.json");

            // Obtener monedas del usuario
            const docRef = doc(db, "user_profile", user.uid);
            const docSnap = await getDoc(docRef);

            // Filtrar la "data" dependiendo de las monedas del usuario
            if (docSnap.exists()) {

                // Extraer los datos de monedas tanto de la DB como 
                const userData = docSnap.data().monedas;
                const dbData = fetchedData.data;

                // Itera sobre cada moneda del usuario
                userData.forEach( (coin, idx) => {

                    // Extraer los datos de la moneda de utilizando los nombres
                    // de las monedas del usuario. La información es luego agregada
                    // a un array.
                    outputData.push(dbData[coin.name.toLowerCase()]);

                    // Se agrega la cantidad de monedas compradas por el usuario
                    outputData[idx]["quantity"] = coin.quantity;

                })

                setData(outputData);
            }
            else {
                console.log("Error: Data not available.");
            }
               
        }

        filterData();

    }, [user, db])

    return (
        <>
        <div className={styles.walletCtn}>
            {/*<h1>Portfolio</h1>*/}
            <Cards data={data}/>
        </div>
        </>
    )
}

export default WalletPage
