import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <Header />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}