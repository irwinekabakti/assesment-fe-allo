<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRocketStore } from "@/stores/rocketStores";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const route = useRoute();
const store = useRocketStore();


// onMounted(() => {
//   const idParam = route.params.id;
//   const id = Array.isArray(idParam) ? idParam[0] : idParam;
//   // If your API expects number:
//   store.fetchRocketDetail(id ? Number(id) : 0); // or handle undefined case
//   // If it expects string:
//   // store.fetchRocketDetail(id ?? '');
// });

onMounted(() => {
  store.fetchRocketDetail(route.params.id);
});

onMounted(() => {
  const id = route.params.id;
  if (typeof id === "string") {
    store.fetchRocketDetail(id);
  }
});

</script>

<template>
  <div class="p-4 max-w-4xl mx-auto">
    <LoadingSpinner v-if="store.loading" />

    <div v-if="store.error" class="text-center">
      <p class="text-red-500">{{ store.error }}</p>
    </div>

    <div v-if="store.selectedRocket" class="space-y-4">
      <img
        :src="store.selectedRocket.flickr_images[0]"
        class="w-full rounded-lg"
      />

      <h1 class="text-3xl font-bold">
        {{ store.selectedRocket.name }}
      </h1>

      <p>{{ store.selectedRocket.description }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>Cost per launch:</strong> ${{ store.selectedRocket.cost_per_launch }}</p>
        <p><strong>Country:</strong> {{ store.selectedRocket.country }}</p>
        <p><strong>First flight:</strong> {{ store.selectedRocket.first_flight }}</p>
      </div>
    </div>
  </div>
</template>
