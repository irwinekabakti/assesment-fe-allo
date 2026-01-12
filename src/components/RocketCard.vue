<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { defineProps } from "vue";


defineProps({
  rocket: Object,
});

// onMounted(() => {
//   store.fetchRockets();

//   console.log(store, '<==')

// });


const router = useRouter();

</script>

<template>
  < <div
    class="bg-black rounded-lg shadow hover:shadow-lg transition cursor-pointer"
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
  
  <!-- <div
    class="bg-black rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    @click="router.push(`/rocket/${rocket.id}`)"
  >
    <img
      :src="TEst"
      alt="rocket"
      class="h-48 w-full object-cover rounded-t-lg"
    />
    <div class="p-4">
      <h2 class="font-semibold text-lg">Test name Comp</h2>
      <p class="text-sm text-gray-600 line-clamp-3">
        Test
      </p>
    </div>
  </div> -->

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
