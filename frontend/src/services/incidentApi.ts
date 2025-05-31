import axios from 'axios';

export const getIncidents = async () => {
  const res = await axios.get('/api/incident');
  return res.data;
};
export const getIncidentById = async (id: string) => {
  const res = await axios.get(`/api/incident/${id}`);
  return res.data;
};