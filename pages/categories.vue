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

    <ModalsOverlay :openOverlay="openEditOverlay" @closeOverlay="editCategory()">
      <template #title>Edit Category</template>
      <form @submit.prevent="submitEdit()" class="py-6">
        <div class="p-2 bg-accent-100 rounded-md w-fit mx-auto mb-5 2xl:mb-10">
          <img :src="require('@/assets/images/insights/categories.svg')" alt="" class="w-30">

          <div>
            <FormInput type="file" placeholder="Upload New" />
          </div>
        </div>
        <FormInput label="Category Name" v-model="category_form.name" :inputValue="category_form.name" />
        <FormButton :loading="loadingState" class="w-56 mx-auto mt-5 2xl:mt-10">Update Category</FormButton>
      </form>
    </ModalsOverlay>

    <UiTypographyH2>Categories Overview</UiTypographyH2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      <UiCardsOverview v-for="item in overview" :key="item.id" :imagePath="item.imagePath" :item="item.title" :item_count="item.count" :route="item.route" />
    </div>
    <div class="flex justify-between items-center mt-10">
      <UiTypographyH2>Manage Categories</UiTypographyH2>

      <div class="flex gap-5">
        <UiButtonsPrimary>New Category</UiButtonsPrimary>
        <UiButtonsTertiary>New Subcategory</UiButtonsTertiary>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-5">
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
      category_form: {
        name: 'Test Category'
      },
      openDialog: false,
      openEditOverlay: false,
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