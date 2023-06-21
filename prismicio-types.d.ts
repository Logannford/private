// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HomepageHeroSlice;
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for test documents */
interface TestDocumentData {
  /**
   * testRichText field in *test*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: test.testrichtext
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  testrichtext: prismic.RichTextField;
}
/**
 * test document from Prismic
 *
 * - **API ID**: `test`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TestDocumentData>, "test", Lang>;
export type AllDocumentTypes = HomepageDocument | TestDocument;
/**
 * Primary content in HomepageHero → Primary
 *
 */
interface HomepageHeroSliceDefaultPrimary {
  /**
   * Homepage banner field in *HomepageHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.homepage_banner
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  homepage_banner: prismic.RichTextField;
  /**
   * homepage sub field field in *HomepageHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.homepage_sub_field
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  homepage_sub_field: prismic.RichTextField;
  /**
   * homepage_primary_cta field in *HomepageHero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.homepage_primary_cta
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  homepage_primary_cta: prismic.LinkField;
  /**
   * homepage_secondary_cta field in *HomepageHero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage_hero.primary.homepage_secondary_cta
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  homepage_secondary_cta: prismic.LinkField;
}
/**
 * Default variation for HomepageHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomepageHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomepageHeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HomepageHero*
 *
 */
type HomepageHeroSliceVariation = HomepageHeroSliceDefault;
/**
 * HomepageHero Shared Slice
 *
 * - **API ID**: `homepage_hero`
 * - **Description**: `HomepageHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomepageHeroSlice = prismic.SharedSlice<
  "homepage_hero",
  HomepageHeroSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      TestDocumentData,
      TestDocument,
      AllDocumentTypes,
      HomepageHeroSliceDefaultPrimary,
      HomepageHeroSliceDefault,
      HomepageHeroSliceVariation,
      HomepageHeroSlice,
    };
  }
}
