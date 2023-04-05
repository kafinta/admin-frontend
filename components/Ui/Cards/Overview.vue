<template>
  <nuxt-link :to="route" class="border border-accent-100 rounded-2xl p-5 flex items-center gap-5">
    <img :src="imagePath" alt="" class="w-8 h-8">
    <div>
      <UiTypographyH2>{{ item_count }}</UiTypographyH2>
      <UiTypographyP class="m-0">{{ item }}</UiTypographyP>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    item_count: {
      default: 10,
      type: Number
    },

    item: {
      default: 'Purchases',
      type: String
    },

    route: {
      default: '/dashboard',
      type: String
    },

    imagePath: String,
  }
}
</script>