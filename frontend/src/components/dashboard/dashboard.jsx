import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const dashboard = () => {
    return (
        <>
            <Navbar />
            <continer>
                <Outlet />
            </continer>
        </>
    )
}

export default dashboard
