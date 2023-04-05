<template>
  <div>
    <UiTypographyH2>Categories Overview</UiTypographyH2>
    <div class="grid gri-cols-2 lg:grid-cols-4 gap-5 my-6">
      <UiCardsOverview v-for="item in overview" :key="item.id" :imagePath="item.imagePath" :item="item.title" :item_count="item.count" :route="item.route" />
    </div>
    <div class="flex justify-between items-center mt-10">
      <UiTypographyH2>Manage Categories</UiTypographyH2>

      <div class="flex gap-5">
        <UiButtonsPrimary>New Category</UiButtonsPrimary>
        <UiButtonsTertiary>New Subcategory</UiButtonsTertiary>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-5">
      <UiCardsCategories v-for="category in categories" :key="category.id" :imagePath="category.imagePath" :category_name="category.name" :subcategories="category.subcategory" :products="category.products" 
      @viewCategory="viewCategory()"
      @editCategory="editCategory()"
      @deleteCategory="deleteCategory()"
      />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'user',
  data() {
    return {
      overview: [
        {
          id: 1,
          imagePath: require('@/assets/images/insights/categories.svg'),
          title: 'Categories',
          count: '0',
          route: '/categories'
        },
        {
          id: 2,
          imagePath: require('@/assets/images/insights/categories.svg'),
          title: 'Sub Categories',
          count: '0',
          route: '/categories'
        },
      ],

      categories: [
        {
          id: 1,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        },
        {
          id: 1,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        },
        {
          id: 1,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        },
        {
          id: 1,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        }
      ]
    }
  },

  methods: {
    viewCategory(){

    },
    editCategory(){

    },
    deleteCategory(){
      
    }
  }
}
</script>