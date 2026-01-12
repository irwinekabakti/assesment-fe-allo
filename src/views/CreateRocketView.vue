<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useRocketStore } from "@/stores/rocketStores";
import {  } from "vue";

const store = useRocketStore();
const router = useRouter();
const name = ref("");
const description = ref("");
const country = ref("");
const company = ref("");
const cost = ref<number>(0);
const status = ref<"active" | "reusable">("active");
const active = computed<boolean>(() => status.value === "active");
const reusable = computed<boolean>(() => status.value === "reusable");
const heightMeters = ref<number>(0);
const heightFeet = ref<number>(0);
const massKg = ref<number>(0);
const massLb = ref<number>(0);

const submit = (): void => {
  store.addRocket({
    name: name.value,
    description: description.value,
    country: country.value,
    company: company.value,
    cost_per_launch: cost.value,
    first_flight: new Date().toISOString().split("T")[0],
    active: active.value,
      flickr_images: imageBase64.value,
    // flickr_images: imagePreviews.value,
    first_stage: {
      reusable: reusable.value,
    },
    height: {
      meters: heightMeters.value,
      feet: heightFeet.value,
    },
    mass: {
      kg: massKg.value,
      lb: massLb.value,
    },
    isLocal: true,
  });

  router.push("/");
};


const imagePreviews = ref<string[]>([]);
// const imageFiles = ref<File[]>([]);

// const onImageChange = (event: Event): void => {
//   const input = event.target as HTMLInputElement;
//   if (!input.files) return;

//   imageFiles.value = Array.from(input.files);

//   imagePreviews.value = imageFiles.value.map((file) =>
//     URL.createObjectURL(file)
//   );
// };


const imageBase64 = ref<string[]>([]);

const onImageChange = async (event: Event): Promise<void> => {
  const input = event.target as HTMLInputElement;
  if (!input.files) return;

  const files = Array.from(input.files);

  imageBase64.value = await Promise.all(
    files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject("Failed to read file");
          reader.readAsDataURL(file);
        })
    )
  );
};

</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">➕ Add New Rocket</h1>

    <form class="space-y-3" @submit.prevent="submit">
      <input v-model="name" placeholder="Rocket Name" class="input" required />
      <textarea v-model="description" placeholder="Description" class="input"></textarea>
      <input v-model="country" placeholder="Country" class="input" />
      <input v-model="company" placeholder="Company" class="input" />

      <input
        v-model.number="cost"
        type="number"
        placeholder="Cost per launch"
        class="input"
      />

      <input
  type="file"
  accept="image/*"
  multiple
  @change="onImageChange"
  class="input"
/>

      <div class="flex gap-6">
  <label class="flex items-center gap-2">
    <input
      type="radio"
      name="status"
      v-model="status"
      value="active"
    />
    Active
  </label>

  <label class="flex items-center gap-2">
    <input
      type="radio"
      name="status"
      v-model="status"
      value="reusable"
    />
    Reusable
  </label>
</div>


      <div class="grid grid-cols-2 gap-2">
        <input v-model.number="heightMeters" placeholder="Height (m)" class="input" />
        <input v-model.number="heightFeet" placeholder="Height (ft)" class="input" />
        <input v-model.number="massKg" placeholder="Mass (kg)" class="input" />
        <input v-model.number="massLb" placeholder="Mass (lb)" class="input" />
      </div>

      <div class="flex gap-2 pt-2">
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" class="bg-gray-300 px-4 py-2 rounded" @click="router.back()">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>

