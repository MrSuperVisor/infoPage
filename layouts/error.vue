<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/how-to-fly">
      Совершить полет
    </NuxtLink>
    <NuxtLink to="/how-to-insure">
      Застраховать полет
    </NuxtLink>
    <NuxtLink to="/how-to-find-work">
      Найти работу
    </NuxtLink>
    <NuxtLink to="/how-to-find-perfomer">
      Найти исполнителя
    </NuxtLink>
    <NuxtLink to="/how-to-ads">
      Объявления
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError+' ('+this.error.statusCode+')'
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
