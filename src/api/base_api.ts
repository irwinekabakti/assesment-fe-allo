import axios, { type AxiosResponse } from "axios";
import type { Rocket } from '@/types/rocket';

const api = axios.create({
  baseURL: "https://api.spacexdata.com",
  timeout: 3500,
});


export async function getRockets(): Promise<AxiosResponse<Rocket[]>> {
  const response = await api.get("/v4/rockets");
  console.log(response.data, '<--- from base_api.ts')
  return response;
}

export async function getRocketById(id: string | number): Promise<AxiosResponse<Rocket>> {
  const response = await api.get(`/v4/rockets/${id}`);
  return response;
}

