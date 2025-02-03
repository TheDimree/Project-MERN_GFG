import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
    return (
        <>
            <Navbar />
            <p>This project explores user authentication, authorization, and product management with MongoDB Atlas.<br/>
            <i>Create account with "admin" role to manage products.</i>
            </p>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default dashboard