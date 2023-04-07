<template>
  <transition name="slide-fade" >
    <nav class="fixed z-30 top-0 left-0 w-4/6 md:w-1/4 lg:w-1/5 xl:w-1/6 flex flex-col justify-between bg-secondary h-screen">
      <div class="mt-6">
        <div class="px-8">
          <NavigationLogoInverted class="w-36 text-white"/>
        </div>

        <div class="mt-6">
          <nuxt-link to="/">
            <NavigationSideMenu menu_text="Overview" :is_active="dashboardActive">
              <UiIconsOverview />
            </NavigationSideMenu>
          </nuxt-link>

          <nuxt-link to="/inbox">
            <NavigationSideMenu menu_text="Inbox" :is_active="inboxActive">
              <UiIconsMessages />
            </NavigationSideMenu>
          </nuxt-link>

          <nuxt-link to="/orders">
            <NavigationSideMenu menu_text="Orders" :is_active="OrdersActive">
              <UiIconsCart />
            </NavigationSideMenu>
          </nuxt-link>

          <nuxt-link to="/categories">
            <NavigationSideMenu menu_text="Categories" :is_active="categoriesActive">
              <UiIconsCategories />
            </NavigationSideMenu>
          </nuxt-link>

          <nuxt-link to="/earnings">
            <NavigationSideMenu menu_text="Earnings" :is_active="earningsActive">
              <UiIconsTransactions />
            </NavigationSideMenu>
          </nuxt-link>
        </div>
      </div>

      <div class="py-6 bg-accent-600">
        <div class="flex items-center gap-5 px-6">
          <div class="relative flex w-fit">
            <UserProfilePicture :artisan="username" :custom_dimensions="true" class="h-10 w-10"/>
            <UserProfileOnlineStatus class="absolute right-0 bottom-0" :is_online="true" :is_displayed="true"/>
          </div>

          <div>
            <UiTypographyP class="text-white">{{ username }}</UiTypographyP>
          </div>
        </div>

        <div class="px-6">
          <UiButtonsTertiary @clicked="$router.push({path: '/sellers'})" class="mt-6 text-white" :flexdisplay="true">Sign Out</UiButtonsTertiary>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      username: 'Quadri',
      dashboardActive: false,
      inboxActive: false,
      categoriesActive: false,
      OrdersActive: false,
      earningsActive: false,
    };
  },
  methods: {
    routeCheck(){
      if (this.$route.name === '/') {
        this.dashboardActive = true
      }
      if (this.$route.name.includes('inbox')) {
        this.inboxActive = true
      }
      if (this.$route.name.includes('categories')) {
        this.categoriesActive = true
      }
      if (this.$route.name.includes('orders')) {
        this.OrdersActive = true
      }
      if (this.$route.name.includes('earnings')) {
        this.earningsActive = true
      }
    },
  },

  created() {
    this.routeCheck();
    console.log(this.$route.name)
  },

  watch: {
    $route() {
      location.reload();
    },
  }
}
</script>

<style>
</style>