
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

export const useRocketStore = defineStore('rocket', {
  // ✅ Type the state return to RocketState
  state: (): RocketState => ({
    rockets: [],
    selectedRocket: null,
    loading: false,
    error: null,
    filterText: '',
  }),

  // ✅ Type the getter’s return and its parameter
  getters: {
    filteredRockets(state): Rocket[] {
      const q = state.filterText.trim().toLowerCase();
      if (!q) return state.rockets;
      return state.rockets.filter((rocket) =>
        rocket.name.toLowerCase().includes(q)
      );
    },
  },

  // ✅ Type actions to return Promise<void>, and widen id type if your API allows
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
