<script setup>
import { useRocketStore } from "@/stores/rocketStores";
const store = useRocketStore();
</script>

<template>
  <input
    v-model="store.filterText"
    placeholder="Search rocket..."
    class="w-full mb-4 p-2 border rounded"
  />
</template>
