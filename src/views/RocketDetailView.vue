<script setup>
import { onMounted, watch  } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRocketStore } from "@/stores/rocketStores";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const route = useRoute();
const store = useRocketStore();
const router = useRouter();

onMounted(() => {
  store.fetchRocketDetail(route.params.id);
});

onMounted(() => {
  const id = route.params.id;

  if (typeof id === "string") {
    store.fetchRocketDetail(id);
  }
});

watch(
  () => store.selectedRocket,
  (rocket) => {
    if (rocket) {
      document.title = `Rocket Detail - 🚀 ${rocket.name}`;
    }
  },
  { immediate: true }
);

console.log(store, '<--------')

</script>

<template>
  <div class="p-4 max-w-4xl mx-auto my-4">
    <LoadingSpinner v-if="store.loading" />

    <div v-if="store.error" class="text-center">
      <p class="text-red-500">{{ store.error }}</p>
    </div>

    <div class="my-2" @click="router.push(`/`)">
      <button class="bg-gray-100 pt-2 pb-2 pl-4 pr-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer font-semibold">Back</button>
    </div>

<div v-if="store.selectedRocket" class="my-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    <img
      :src="store.selectedRocket.flickr_images[0]"
      class="h-full w-full rounded-lg"
    />

    <div class="space-y-4">
      <h1 class="text-3xl font-bold">
        {{ store.selectedRocket.name }}
      </h1>

      <p>
        {{ store.selectedRocket.description }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p>
          <strong>Status:</strong>
          {{ store.selectedRocket.active ? 'Active' : 'Inactive' }}
        </p>

        <p>
          <strong>Reusable:</strong>
          {{ store.selectedRocket.first_stage.reusable ? 'Yes' : 'No' }}
        </p>
        
        <p>
          <strong>Cost per launch:</strong>
          ${{ store.selectedRocket.cost_per_launch }}
        </p>
        <p>
          <strong>Country:</strong>
          {{ store.selectedRocket.country }}
        </p>
        <p>
          <strong>Company:</strong>
          {{ store.selectedRocket.company }}
        </p>
        <p>
          <strong>First flight:</strong>
          {{ store.selectedRocket.first_flight }}
        </p>

        <p>
          <strong>
            Height:
          </strong>
          {{ store.selectedRocket.height.meters }} meter / {{ store.selectedRocket.height.feet }} feet
        </p>

                <p>
          <strong>
            Mass :
          </strong>
          {{ store.selectedRocket.mass.kg }} kg / {{ store.selectedRocket.mass.lb }} lb
        </p>

      </div>
    </div>
  </div>
</div>

  </div>
</template>
