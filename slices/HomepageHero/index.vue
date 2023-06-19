<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container"
  >
    <PrismicRichText 
      :field="slice.primary.homepage_banner" 
      class="text-xl font-bold"
    />
    <PrismicRichText :field="slice.primary.homepage_sub_field" />
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
