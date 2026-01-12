/*
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
*/

/*
export interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  cost_per_launch: number;
  country: string;
  first_flight: string;
    isLocal?: boolean;
}
*/

export interface Rocket {
  id: string;
  name: string;
  description: string;
  country: string;
  company: string;
  cost_per_launch: number;
  first_flight: string;
  active: boolean;
  flickr_images: string[];

  first_stage: {
    reusable: boolean;
  };

  height: {
    meters: number;
    feet: number;
  };

  mass: {
    kg: number;
    lb: number;
  };

  isLocal?: boolean;
}

