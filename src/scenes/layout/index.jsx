import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'



const Layout = () => {
  const isNonMoblie = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return <Box display={isNonMoblie ? 'flex': 'block'} width="100%" height="100%">
    <Box>
      <Sidebar
        isNonMoblie={isNonMoblie}
        drawerWidth='250px'
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
      <Navbar />
      <Outlet />
    </Box>
  </Box>
}

export default Layout
