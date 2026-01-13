import axios, { type AxiosResponse } from "axios";
import type { Rocket } from '@/types/rocket';


const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 3500,
});

console.log(import.meta.env.VITE_BASE_API_URL, '<---');


export async function getRockets(): Promise<AxiosResponse<Rocket[]>> {
  const response = await api.get("/v4/rockets");
  console.log(response, '<--- from base_api.ts')
  return response;
}

export async function getRocketById(id: string | number): Promise<AxiosResponse<Rocket>> {
  const response = await api.get(`/v4/rockets/${id}`);
  return response;
}

