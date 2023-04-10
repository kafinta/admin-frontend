<template>
  <div :class="[openDialog ? 'overflow-y-hidden' : '', openEditOverlay ? 'overflow-y-hidden' : '']">
    <ModalsDrawer :openDialog="openDialog" @closeDialog="viewCategory()">
      <template #title>Test Category</template>
      <div>
        <div class="grid grid-cols-2 gap-5">
          <div class="p-5 border border-accent-100 rounded-md">
            <UiTypographyP>Name</UiTypographyP>
            <UiTypographyH3>Test Category</UiTypographyH3>
          </div>
          <div class="p-5 border border-accent-100 rounded-md">
            <UiTypographyP>Total products</UiTypographyP>
            <UiTypographyH3>1</UiTypographyH3>
          </div>
        </div>
      </div>
    </ModalsDrawer>

    <UiTypographyH2>Purchases Overview</UiTypographyH2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      <UiCardsOverview v-for="item in overview" :key="item.id" :imagePath="item.imagePath" :item="item.title" :item_count="item.count" :route="item.route" />
    </div>
    <div class="flex justify-between items-center mt-10">
      <UiTypographyH2>Manage Purchases</UiTypographyH2>
      <UiButtonsPrimary>Product deliveries</UiButtonsPrimary>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'user',
  data() {
    return {
      category_form: {
        name: 'Test Category'
      },
      openDialog: false,
      openEditOverlay: false,
      openDeleteOverlay: false,
      newCategoryOverlay: false,
      newSubcategoryOverlay: false,
      overview: [
        {
          id: 1,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          title: 'Total purchases',
          count: 0,
          route: '/purchases'
        },
        {
          id: 2,
          imagePath: require('@/assets/images/insights/paid.svg'),
          title: 'Paid',
          count: 0,
          route: '/purchases'
        },
        {
          id: 3,
          imagePath: require('@/assets/images/insights/completed.svg'),
          title: 'Completed',
          count: 0,
          route: '/purchases'
        },
        {
          id: 4,
          imagePath: require('@/assets/images/insights/pending.svg'),
          title: 'Pending',
          count: 0,
          route: '/purchases'
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
          id: 2,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        },
        {
          id: 3,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        },
        {
          id: 4,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          name: 'Test Category',
          subcategory: 0,
          products: 0,
        }
      ],
      loadingState: false
    }
  },

  methods: {
    viewCategory(){
      this.openDialog = !this.openDialog
    },
    editCategory(){
      this.openEditOverlay = !this.openEditOverlay
    },
    deleteCategory(){
      this.openDeleteOverlay = !this.openDeleteOverlay
    },

    createCategory(){
      this.newCategoryOverlay = !this.newCategoryOverlay
    },

    createSubcategory(){
      this.newSubcategoryOverlay = !this.newSubcategoryOverlay
    },

    submitEdit(){
      this.loadingState = true
      setTimeout(() => {
        this.editCategory()
        this.loadingState = false
      }, 2000);
    }
  }
}
</script>