import { Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import React from 'react'
import { useGetCustomersQuery } from 'state/api'

const Customers = () => {
    const theme = useTheme
    const { data, isLoading } = useGetCustomersQuery
    console.log("🚀 ~ file: index.jsx:9 ~ Customers ~ isLoading state:", isLoading)
    console.log("🚀 ~ file: index.jsx:9 ~ Fetch Customers data:", data)

  return (
    <Box>
        <Header title='Customers' subtitle='This is a list of all customers' />
        {/* Grid for Customers data  */}
        {/* data.map */}
    </Box>
  )
}

export default Customers
