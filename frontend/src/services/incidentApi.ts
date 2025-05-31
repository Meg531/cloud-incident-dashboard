import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api' // Adjust to match your .NET backend

export const getOpenIncidents = async () => {
  const response = await axios.get(`${API_BASE_URL}/incidents/open`)
  return response.data
}

export const getResolvedIncidents = async () => {
  const response = await axios.get(`${API_BASE_URL}/incidents/resolved`)
  return response.data
}