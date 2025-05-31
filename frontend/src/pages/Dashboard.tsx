import { useEffect, useState } from 'react'
import { getOpenIncidents, getResolvedIncidents } from '../services/incidentApi'
import { Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function Dashboard() {
  const [openCount, setOpenCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const open = await getOpenIncidents()
        const resolved = await getResolvedIncidents()
        setOpenCount(Array.isArray(open) ? open.length : 0)
        setResolvedCount(Array.isArray(resolved) ? resolved.length : 0)
      } catch (error) {
        console.error('Error fetching incident data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Open Incidents</Typography>
              <Typography variant="h4">{openCount}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resolved</Typography>
              <Typography variant="h4">{resolvedCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
