<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="px-6 md:px-12 lg:px-20 text-white bg-dark-black min-h-screen"
  >
    <div class="grid grid-cols-2 gap-x-10">
      <div class="flex flex-col gap-y-4">
        <PrismicRichText 
          :field="slice.primary.homepage_banner" 
          class="text-xxl font-semibold mt-20"
        />
        <PrismicRichText 
          :field="slice.primary.homepage_sub_field" 
          class="w-2/3 font-thin text-lg text-light-grey"
        />
        <!-- CTA section -->
        <div class="flex gap-x-8 mt-5">
          <div class="bg-light-grey rounded-md">
            <PrismicLink 
              :field="slice.primary.homepage_primary_cta"
              :class="buttonClasses"
            >
              Getting Started
            </PrismicLink>
          </div>
          <div class="bg-light-grey rounded-md">
            <PrismicLink 
              :field="slice.primary.homepage_secondary_cta"
              :class="buttonClasses"
              class="!bg-white !text-black"
            >
              Free Trial
            </PrismicLink>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <ThreeJs />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

const buttonClasses = 
		"text-white bg-dark-purple border-2 border-white rounded-md w-full p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold";

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
