import React, {useEffect, useState} from 'react';
import axios from "../../Components/api/apicrypto"
import Cards from '../../Components/UI/Cards';
import styles from "./WalletPage.module.css"

const WalletPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await axios.get("https://nc-g63-default-rtdb.firebaseio.com/crypto.json");
            
            const loadedCrypto = [];

            for (const key in fetchedData.data) {
                loadedCrypto.push({
                    name: fetchedData.data[key].name,
                    low: fetchedData.data[key].low,
                    mid: fetchedData.data[key].mid,
                    high: fetchedData.data[key].high,
                    logo: fetchedData.data[key].logo,
                    price: fetchedData.data[key].price,
                })
            }
            setData(loadedCrypto);
            
        }
        fetchData()
    }, [])

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
