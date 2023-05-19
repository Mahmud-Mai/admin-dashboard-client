import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import { ChevronLeft, ChevronRightOutlined } from '@mui/icons-material'
import { navItems } from 'common/Constants'


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebbarOpen,
    isNonMobile
}) => {
    const { pathname } = useLocation()
    const [ active, setActive ] = useState()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

  return (
    <Box component="nav">
        <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebbarOpen(false)}
        variant='persistent'
        anchor='left'
        sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth
            }
        }}
        >
            <Box width="100">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant="h4" fontWeight="bold">
                                MYFIRM
                            </Typography>
                        </Box>
                        {!isNonMobile && (
                            <IconButton onclick={() => setIsSidebbarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>  
            </Box>
            <Box>
                <List>
                    {navItems.map(({ text, icon }) => {
                        if(!icon){
                            return (
                                <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}} >
                                    {text}
                                </Typography>
                            )
                        }
                        const lcText = text.toLowerCase();

                        return (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate(`/${lcText}`)
                                        setActive(lcText) }}
                                        sx={{ 
                                            backgroundColor: active === lcText ? theme.palette.secondary[300] : theme.palette.secondary[100]
                                    }}
                                    >
                                        <ListItemIcon 
                                            sx={{ 
                                                ml: '2rem',
                                                color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200]
                                        }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text}>
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: 'auto'}} />
                                            )}
                                        </ListItemText>
                                    </ListItemButton>
                            </ListItem>
                        )
                    }
                    )}
                </List>
            </Box>
        </Drawer>
    </Box>
  )
}

export default Sidebar
