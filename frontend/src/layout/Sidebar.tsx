import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        {/* Add more nav items here */}
      </List>
    </Drawer>
  )
}