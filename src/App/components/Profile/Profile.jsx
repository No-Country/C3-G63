import React, { useContext, useState } from 'react'
import { Context } from '../../../store/auth-context'
import './Profile.scss'
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from "react";

const Profile = () => {

    const { user, db } = useContext(Context);
    const [userData, setUserData] = useState({fondos: 0});

    useEffect(() => {

        // Obtener los datos del usuario
        const getDocument = async () => {

            const docRef = doc(db, "user_profile", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data());
            }
            else {
                setUserData({fondos: 0});
            }

        }

        getDocument();

    }, [db, user]);

    return (
        <div className="profile__container">
            <h1>Profile</h1>
            <p>Name / Last Name</p>
            <h3>{user?.displayName}</h3>
            <p>Email</p>
            <h3>{user?.email}</h3>
            <p>Cellphone number</p>
            {user?.phoneNumber ? <h3>{user?.phoneNumber}</h3> : <h3>Phone number not found</h3>}
            <p>Transaction Limit</p>
            <h3>$ {userData.fondos}</h3>
        </div>
    )
}

export default Profile

/* 
        <div className='profile__overlay'>
            <div className='profile__container'>
                <div className="profile__title-container">
                    <h1 className='profile__title'>Profile</h1>
                    <img src={user?.photoURL} alt="" />
                </div>
                
                <div className="profile__info-container">
                    <div className='profile__item profile__name'>
                        <div>
                            <p>Name and Last Name</p>
                            <h3>{user?.displayName}</h3>
                        </div>
                        <i class="far fa-edit fa-2x"></i>
                    </div>
                    <div className='profile__item profile__mail'>
                        <div>
                            <p>Email</p>
                            <h3>{user?.email}</h3>
                        </div>
                        <i class="far fa-edit fa-2x"></i>
                    </div>
                    <div className='profile__item profile__phone'>
                        <div>
                            <p>Cellphone</p>
                            <h3>+359478635241</h3>
                        </div>
                        <i class="far fa-edit fa-2x"></i>
                    </div>
                    <div className='profile__item profile__limit'>
                        <div>
                            <p>Transaction Limit</p>
                            <h3>$1.000</h3>
                        </div>
                        <i class="far fa-edit fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
        */