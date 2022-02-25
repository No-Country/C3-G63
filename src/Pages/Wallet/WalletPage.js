import React, {useEffect, useState} from 'react';
import axios from "../../Components/api/apicrypto"
import Cards from '../../Components/UI/Cards';
import styles from "./WalletPage.module.css"

const WalletPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await axios.get("https://crypto-app-b0955-default-rtdb.firebaseio.com/crypto.json");
            console.log(fetchedData)
            const loadedCrypto = [];

            for (const key in fetchedData.data) {
                loadedCrypto.push({
                    name: fetchedData.data[key].name,
                    logo: fetchedData.data[key].logo,
                    price: fetchedData.data[key].price,
                })
            }
            setData(loadedCrypto);
            console.log(loadedCrypto)
        }
        fetchData()
    }, [])

    return (
        <>
        <div className={styles.headerTest}>HEADER</div>
        <div className={styles.walletCtn}>
            <Cards data={data}/>
        </div>
        </>
    )
}

export default WalletPage
