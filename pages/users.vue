<template>
  <Layouts>
    <UiTypographyH2>Users Overview</UiTypographyH2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      <UiCardsOverview v-for="item in overview" :key="item.id" :imagePath="item.imagePath" :item="item.title" :item_count="item.count" :route="item.route" />
    </div>
  </Layouts>
</template>
<script>
export default {
  data() {
    return {
      overview: [
        {
          id: 1,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Total Users',
          count: 0,
          route: '/users'
        },
        {
          id: 2,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Sellers',
          count: 0,
          route: '/users'
        },
        {
          id: 3,
          imagePath: require('@/assets/images/insights/users.svg'),
          title: 'Buyers',
          count: 0,
          route: '/users'
        },
      ],
    }
  },
}
</script>