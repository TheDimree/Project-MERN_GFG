import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
    return (
        <>
            <Navbar />
            <p>This project is created to understand user authentication and authorization, as well as product management.</p>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default dashboard