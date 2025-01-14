import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default dashboard