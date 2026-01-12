<script setup>
import { useRouter } from "vue-router";

defineProps({
  rocket: Object,
});

const router = useRouter();
</script>

<template>
  <div
    class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    @click="router.push(`/rocket/${rocket.id}`)"
  >
    <img
      :src="rocket.flickr_images[0]"
      alt="rocket"
      class="h-48 w-full object-cover rounded-t-lg"
    />
    <div class="p-4">
      <h2 class="font-semibold text-lg">{{ rocket.name }}</h2>
      <p class="text-sm text-gray-600 line-clamp-3">
        {{ rocket.description }}
      </p>
    </div>
  </div>
</template>


<!-- <script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { Rocket } from "@/types/rocket";

const props = defineProps<{
  rocket: Rocket;
}>();

const router = useRouter();

const imageUrl = computed<string>(() => {
  return props.rocket.flickr_images.length > 0
    ? props.rocket.flickr_images[0]
    : "/placeholder-rocket.jpg";
});
</script>

<template>
  <div
    class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    @click="router.push(`/rocket/${rocket.id}`)"
  >
    <img
      :src="imageUrl"
      alt="rocket"
      class="h-48 w-full object-cover rounded-t-lg"
    />

    <div class="p-4">
      <h2 class="font-semibold text-lg">
        {{ rocket.name }}
      </h2>

      <p class="text-sm text-gray-600 line-clamp-3">
        {{ rocket.description }}
      </p>
    </div>
  </div>
</template> -->
