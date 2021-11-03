import React from 'react'
import Footer from '../../Footer/Footer'
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {

    useProtectedPage();

    return (
        <div>
            Profile Page
            <Footer/>
        </div>
    )
}

export default ProfilePage;