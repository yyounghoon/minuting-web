import { client } from '../client';

export const getCompanyTeam = async () => {
  const response = await client.get('/company');
  return response.data;
};
