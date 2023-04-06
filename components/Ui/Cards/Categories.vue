<template>
  <div class="border border-accent-100 rounded-2xl p-5 flex items-center gap-5">
    <img :src="imagePath" class="w-24" alt="">
    <div>
      <UiTypographyH3>{{ category_name }}</UiTypographyH3>
      <UiTypographyP>{{ subcategories }} subcategories</UiTypographyP>
      <UiTypographyP>{{ products }} total products</UiTypographyP>

      <div class="mt-2 flex gap-3">
        <button @click="$emit('viewCategory')" class="p-1.5 border border-accent-100 rounded-md hover:border-primary hover:text-primary duration-500 ease-in-out">
          <UiIconsEye class="w-4 h-4" />
        </button>
        <button @click="$emit('editCategory')" class="p-1.5 border border-accent-100 rounded-md hover:border-primary hover:text-primary duration-500 ease-in-out">
          <UiIconsEdit class="w-4 h-4" />
        </button>
        <button @click="$emit('deleteCategory')" class="p-1.5 border border-accent-100 rounded-md hover:border-primary hover:text-primary duration-500 ease-in-out">
          <UiIconsDelete class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    imagePath: String,
    category_name: String,
    subcategories: Number,
    products: Number,
  }
}
</script>