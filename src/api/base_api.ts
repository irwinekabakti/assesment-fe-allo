import axios, { type AxiosResponse } from "axios";
import type { Rocket } from '@/types/rocket';

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
  timeout: 3500,
});


export function getRockets(): Promise<AxiosResponse<Rocket[]>> {
  return axios.get<Rocket[]>('/api/rockets');
}

export function getRocketById(id: string | number): Promise<AxiosResponse<Rocket>> {
  return axios.get<Rocket>(`/api/rockets/${id}`);
}

