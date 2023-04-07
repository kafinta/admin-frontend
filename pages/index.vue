<template>
  <div>
    <UiTypographyH2>Quick Insights</UiTypographyH2>
    <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 flex-wrap">
      <UiCardsOverview v-for="insight in insights" :key="insight.id" :imagePath="insight.imagePath" :item="insight.title" :item_count="insight.count" :route="insight.route" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'user',
  data() {
    return {
      insights: [
        {
          id: 1,
          imagePath: require('@/assets/images/insights/categories.svg'),
          title: 'Categories',
          count: 0,
          route: '/categories'
        },
        {
          id: 2,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Users',
          count: 0,
          route: '/users'
        },
        {
          id: 3,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Sellers',
          count: 0,
          route: '/users'
        },
        {
          id: 4,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Buyers',
          count: 0,
          route: '/users'
        },
        {
          id: 5,
          imagePath: require('@/assets/images/insights/transactions.svg'),
          title: 'Transactions',
          count: 0,
          route: '/transactions'
        },
        {
          id: 6,
          imagePath: require('@/assets/images/insights/purchases.svg'),
          title: 'Orders',
          count: 0,
          route: '/projects'
        },
      ]
    }
  },
}
</script>