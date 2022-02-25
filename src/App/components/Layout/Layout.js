import React from 'react'
import Header from '../Header/Header'
import styles from "./Layout.module.css";

const Layout = (props) => {
    return (
        <div>
            <Header />
            <main className={styles.main}>{props.children}</main>
        </div>
    )
}

export default Layout
