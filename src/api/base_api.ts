import axios, { type AxiosResponse } from "axios";
import type { Rocket } from '@/types/rocket';

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
  timeout: 3500,
});


export async function getRockets(): Promise<AxiosResponse<Rocket[]>> {
 const response = await api.get("/rockets");
 console.log(response.data)
      return response;
  // return axios.get<Rocket[]>('/api/rockets');
}

export async function getRocketById(id: string | number): Promise<AxiosResponse<Rocket>> {
  // return axios.get<Rocket>(`/api/rockets/${id}`);
  const response = await api.get(`/rockets/${id}`);
//  console.log(response.data)
      return response;
}

