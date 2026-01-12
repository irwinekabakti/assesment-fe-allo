
// export interface Rocket {
//   id: string | number;
//   name: string;
//   // add other fields you expect from the API:
//   description?: string;
//   active?: boolean;
//   stages?: number;
//   // ...
// }

// export interface Rocket {
//   id: string;
//   name: string;
//   description: string;
//   flickr_images: string[];
//   cost_per_launch: number;
//   country: string;
//   first_flight: string;
// }

// export interface Rocket {
//   id: number | string;
//   name: string;
//   flickr_images: string[];
//   description?: string;
//   cost_per_launch?: number;
//   country?: string;
//   first_flight?: string;
//   // add any other fields returned by your API
// }

// src/types/rocket.ts
export interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  cost_per_launch: number;
  country: string;
  first_flight: string;
}

