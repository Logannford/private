<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex justify-center container rounded-3xl bg-white/95"
  >
    <div class="py-10">
      <PrismicRichText 
        :field="slice.primary.cta_main_heading" 
        class="text-dark-black text-5xl text-center"
      />
      <PrismicRichText 
        :field="slice.primary.cta_subheading" 
        class="text-dark-black text-center mt-5"
      />
      <div class="flex mt-10 justify-center">
        <div class="bg-dark-black rounded-md">
          <PrismicLink 
            :field="slice.primary.cta_link_primary"
            :class="buttonClasses"
            class="group hover:border-black"
          >
            <div class="flex gap-x-4 items-center">
              <span>
                Get Started Today
              </span>
              <div class="ml-px opacity-100 group-hover:opacity-0 group-hover:hidden w-3 h-3 text-white -rotate-90 duration-300">
                <IconsChevronDown />
              </div>
              <div class="hidden group-hover:animate-bounce opacity-0 group-hover:opacity-100 group-hover:block w-3 h-3 text-white duration-300">
                <IconsArrowRight />
              </div>
            </div>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  //imports
  import { Content } from "@prismicio/client";

  //data properties

  const buttonClasses = 
      "text-white bg-dark-purple border-2 border-white rounded-md p-3 md:px-6 md:py-2 duration-300 translate-x-1 -translate-y-1 hover:translate-x-0 hover:-translate-y-0 hover:cursor-pointer flex items-center hover:font-bold";

  //lifecycle hooks
  onMounted(() => {
    const test = document.getElementByTagName("strong");
    console.log(test);
  })

  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  defineProps(
    getSliceComponentProps<Content.CtaSliceSlice>([
      "slice",
      "index",
      "slices",
      "context",
    ])
  );
</script>
