import React, { useEffect, useState } from 'react';
import axios from "../../../Components/api/apicrypto"
import Cards from '../../../Components/UI/Cards'
import styles from "./WalletPage.module.css"

const WalletPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("/v3/ticker/price");
      console.log(fetchedData)
      setData(fetchedData);
    }
    fetchData()
  }, [])

  return (
    <>
      <div className={styles.headerTest}>HEADER</div>
      <div className={styles.walletCtn}>
        <Cards data={data} />
      </div>
    </>
  )
}

export default WalletPage;