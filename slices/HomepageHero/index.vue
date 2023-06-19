<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="px-6 md:px-12 lg:px-20 text-white bg-dark-black"
  >
    <div class="grid grid-cols-2 gap-x-10">
      <div class="flex flex-col gap-y-5">
        <PrismicRichText 
          :field="slice.primary.homepage_banner" 
          class="text-xxl font-bold mt-20"
        />
        <PrismicRichText 
          :field="slice.primary.homepage_sub_field" 
          class="w-2/3 font-thin"
        />
      </div>
      <div class="flex justify-end">
        <ThreeJs />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HomepageHeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
