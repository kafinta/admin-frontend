<template>
  <Layouts :class="[openDialog ? 'overflow-y-hidden' : '', openEditOverlay ? 'overflow-y-hidden' : '']">
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
      <form @submit.prevent="submitEdit()">
        <div class="p-2 bg-accent-100 rounded-md w-fit mx-auto mb-5 2xl:mb-10">
          <img :src="require('@/assets/images/insights/categories.svg')" alt="" class="w-24 mx-auto">

          <div>
            <FormInput type="file" placeholder="Upload New" />
          </div>
        </div>
        <FormInput label="Category Name" v-model="category_form.name" :inputValue="category_form.name" />
        <FormButton :loading="loadingState" class="w-56 mx-auto mt-5 2xl:mt-10">Update Category</FormButton>
      </form>
    </ModalsOverlay>

    <ModalsOverlay :openOverlay="openDeleteOverlay" @closeOverlay="deleteCategory()">
      <template #title>Delete Category</template>
      <div>
        <UiTypographyP>Are you sure you want to delete this course</UiTypographyP>
        <div class="mt-5 2xl:mt-8 p-5 rounded-md border border-accent-100 w-full text-center">
          <UiTypographyH2>Test Category</UiTypographyH2>
        </div>
        <div class="grid grid-cols-2 gap-5 uppercase mt-5 2xl:mt-8">
          <UiButtonsTertiary @clicked="deleteCategory()" class="w-full uppercase">Cancel</UiButtonsTertiary>
          <UiButtonsPrimary @clicked="deleteCategory()" class="w-full uppercase">Yes, Continue</UiButtonsPrimary>
        </div>
      </div>
    </ModalsOverlay>

    <ModalsOverlay :openOverlay="newCategoryOverlay" @closeOverlay="createCategory()">
      <template #title>New Category</template>
      <form @submit.prevent="createCategory()" action="" class="grid gap-5">
        <FormInput placeholder="Enter new category name" label="Category icon" />
        <FormInput placeholder="Enter new category name" label="Category name" />
        <FormButton>Create New Category</FormButton>
      </form>
    </ModalsOverlay>

    <ModalsOverlay :openOverlay="newSubcategoryOverlay" @closeOverlay="createSubcategory()">
      <template #title>New Category</template>
      <form @submit.prevent="createSubcategory()" action="" class="grid gap-5">
        <FormInput placeholder="Choose Category" label="Category" />
        <FormInput placeholder="Enter subcategory name" label="Subcategory name" />
        <FormButton>Create Subcategory</FormButton>
      </form>
    </ModalsOverlay>

    <UiTypographyH2>Categories Overview</UiTypographyH2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      <UiCardsOverview v-for="item in overview" :key="item.id" :imagePath="item.imagePath" :item="item.title" :item_count="item.count" :route="item.route" />
    </div>
    <div class="flex justify-between items-center mt-10">
      <UiTypographyH2>Manage Categories</UiTypographyH2>

      <div class="flex gap-5">
        <UiButtonsPrimary @clicked="createCategory()">New Category</UiButtonsPrimary>
        <UiButtonsTertiary @clicked="createSubcategory()">New Subcategory</UiButtonsTertiary>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-5">
      <UiCardsCategories v-for="category in categories" :key="category.id" :imagePath="category.imagePath" :category_name="category.name" :subcategories="category.subcategory" :products="category.products" 
      @viewCategory="viewCategory()"
      @editCategory="editCategory()"
      @deleteCategory="deleteCategory()"
      />
    </div>
  </Layouts>
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
          imagePath: require('@/assets/images/insights/categories.svg'),
          title: 'Categories',
          count: 0,
          route: '/categories'
        },
        {
          id: 2,
          imagePath: require('@/assets/images/insights/categories.svg'),
          title: 'Sub Categories',
          count: 0,
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