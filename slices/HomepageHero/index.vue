<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="
      pl-6 md:pl-12 lg:pl-20 text-white 
      bg-dark-black min-h-[calc(100vh*1.5)]
    "
  >
    <div class="flex gap-x-10 h-full">
      <div class="mt-20 w-auto h-[calc(100vh-4rem)]">
        <div class="flex flex-col gap-y-4 min-h-[calc(100vh-10rem)]">
          <PrismicRichText 
            :field="slice.primary.homepage_banner" 
            class="text-xxl font-semibold"
          />
          <PrismicRichText 
            :field="slice.primary.homepage_sub_field" 
            class="w-2/3 font-thin text-lg text-light-grey"
          />
          <!-- CTA section -->
          <div class="flex gap-x-8 mt-5">
            <div class="bg-light-grey rounded-md">
              <ButtonsLightButton
                intent="primary"
                size="medium"
              >
                <PrismicLink 
                  :field="slice.primary.homepage_primary_cta"
                >
                  Getting Started
                </PrismicLink>
              </ButtonsLightButton>
            </div>
            <div class="bg-light-grey rounded-md">
              <ButtonsLightButton
                intent="secondary"
                size="medium"
              >
                <PrismicLink 
                  :field="slice.primary.homepage_secondary_cta"
                >
                  Free Trial
                </PrismicLink>
              </ButtonsLightButton>
            </div>
          </div>
        </div>
        <div class="">
          test
        </div>
      </div>
      <div class="sticky top-0 w-3/5 panel">
        <div 
          class="
            flex justify-end -right-16 relative pl-10
            h-[50vh] shrink top-0 
          "
        >
          <HomepageAnimation />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";
import gsap from 'gsap';

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
