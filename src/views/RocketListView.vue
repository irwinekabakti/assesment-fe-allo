<script setup>
import { onMounted } from "vue";
import { useRocketStore } from "@/stores/rocketStores";
import RocketCard from "@/components/RocketCard.vue";
import RocketFilter from "@/components/RocketFilter.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const store = useRocketStore();

onMounted(() => {
  store.fetchRockets();

  console.log(store, '<--')
});
</script>

<template>
  <div class="p-4 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">🚀 SpaceX Rockets</h1>

    <RocketFilter />

    <!-- Loading -->
    <LoadingSpinner v-if="store.loading" />

    <!-- Error -->
    <div v-if="store.error" class="text-center">
      <p class="text-red-500 mb-2">{{ store.error }}</p>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="store.fetchRockets"
      >
        Retry
      </button>
    </div>

    <!-- Success -->
    <div
      v-if="!store.loading && !store.error"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <RocketCard
        v-for="rocket in store.filteredRockets"
        :key=rocket.id
        :rocket="rocket"/>
    </div>
  </div>
</template>
