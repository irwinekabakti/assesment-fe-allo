/*
import { defineStore } from 'pinia';
import { getRockets, getRocketById } from '@/api/base_api';
import type { Rocket } from '@/types/rocket';

interface RocketState {
  rockets: Rocket[];
  selectedRocket: Rocket | null;
  loading: boolean;
  error: string | null;
  filterText: string;
}

const useRocketStore = defineStore('rocket', {
  state: (): RocketState => ({
    rockets: [],
    selectedRocket: null,
    loading: false,
    error: null,
    filterText: '',
  }),

  getters: {
    filteredRockets(state): Rocket[] {
      const q = state.filterText.trim().toLowerCase();
      if (!q) return state.rockets;
      return state.rockets.filter((rocket) =>
        rocket.name.toLowerCase().includes(q)
      );
    },
  },

  actions: {
    async fetchRockets(): Promise<void> {
      this.loading = true;
      this.error = null;
      try {
        const res = await getRockets();
        this.rockets = res.data;
        console.log(res, '<=== data test')
        
      } catch (err) {
        this.error = 'Failed to load rockets';
      } finally {
        this.loading = false;
      }
    },

    async fetchRocketDetail(id: number | string): Promise<void> {
      this.loading = true;
      this.error = null;
      try {
        const res = await getRocketById(id);
        this.selectedRocket = res.data;
      } catch (err) {
        this.error = 'Failed to load rocket detail';
      } finally {
        this.loading = false;
      }
    },
  },
});

export {useRocketStore}
*/

/*
import { defineStore } from 'pinia';
import { getRockets, getRocketById } from '@/api/base_api';
import type { Rocket } from '@/types/rocket';

interface RocketState {
  rockets: Rocket[];          
  localRockets: Rocket[]; 
  selectedRocket: Rocket | null;
  loading: boolean;
  error: string | null;
  filterText: string;
}

export const useRocketStore = defineStore('rocket', {
  state: (): RocketState => ({
    rockets: [],
    localRockets: [],
    selectedRocket: null,
    loading: false,
    error: null,
    filterText: '',
  }),

  getters: {
    allRockets(state): Rocket[] {
      return [...state.localRockets, ...state.rockets];
    },

    filteredRockets(state): Rocket[] {
      const q = state.filterText.trim().toLowerCase();
      if (!q) return [...state.localRockets, ...state.rockets];

      return [...state.localRockets, ...state.rockets].filter((rocket) =>
        rocket.name.toLowerCase().includes(q)
      );
    },
  },

  actions: {
    async fetchRockets(): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const res = await getRockets();
        this.rockets = res.data;
      } catch {
        this.error = 'Failed to load rockets';
      } finally {
        this.loading = false;
      }
    },

    async fetchRocketDetail(id: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const res = await getRocketById(id);
        this.selectedRocket = res.data;
      } catch {
        this.error = 'Failed to load rocket detail';
      } finally {
        this.loading = false;
      }
    },

    addRocket(payload: Omit<Rocket, 'id'>): void {
      const newRocket: Rocket = {
        ...payload,
        id: `local-${Date.now()}`,
        isLocal: true,
      };

      this.localRockets.unshift(newRocket);
    },
  },
});
*/

import { defineStore } from "pinia";
import { getRockets, getRocketById } from "@/api/base_api";
import type { Rocket } from "@/types/rocket";

interface RocketState {
  rockets: Rocket[];        // dari API
  localRockets: Rocket[];   // buatan user
  selectedRocket: Rocket | null;
  loading: boolean;
  error: string | null;
  filterText: string;
}

export const useRocketStore = defineStore("rocket", {
  state: (): RocketState => ({
    rockets: [],
    localRockets: [],
    selectedRocket: null,
    loading: false,
    error: null,
    filterText: "",
  }),

  getters: {
    allRockets(state): Rocket[] {
      return [...state.localRockets, ...state.rockets];
    },

    filteredRockets(state): Rocket[] {
      const q = state.filterText.trim().toLowerCase();
      return this.allRockets.filter((r) =>
        r.name.toLowerCase().includes(q)
      );
    },
  },

  actions: {
    async fetchRockets(): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const res = await getRockets();
        this.rockets = res.data;
      } catch {
        this.error = "Failed to load rockets";
      } finally {
        this.loading = false;
      }
    },

    async fetchRocketDetail(id: string): Promise<void> {
      this.loading = true;
      this.error = null;

      // 🔥 1. CARI DI LOCAL DULU
      const local = this.localRockets.find(r => r.id === id);
      if (local) {
        this.selectedRocket = local;
        this.loading = false;
        return;
      }

      // 🔥 2. JIKA TIDAK ADA → FETCH API
      try {
        const res = await getRocketById(id);
        this.selectedRocket = res.data;
      } catch {
        this.error = "Failed to load rocket detail";
      } finally {
        this.loading = false;
      }
    },

addRocket(payload: Omit<Rocket, "id">): string {
  const id = `local-${crypto.randomUUID()}`;

  const newRocket: Rocket = {
    ...payload,
    id,
    isLocal: true,
  };

  this.localRockets.unshift(newRocket);
  return id;
  }
  },
});
