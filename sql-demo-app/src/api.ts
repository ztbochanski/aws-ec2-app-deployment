import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const executeSQLCommand = (query: string) => {
  const url = `${API_URL}/execute-sql`;
  return axios.post(url, { query });
};
