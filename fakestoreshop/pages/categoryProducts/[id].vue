<template>
  <div>
    <ProductContainer>
      <ProductCard v-for="product in products" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" :id="product.id" />
    </ProductContainer>
  </div>
</template>

<script setup>

const {$api} = useNuxtApp()
import {useRoute} from "nuxt/app";

const route = useRoute();

const {data: products} = await $api.getAllProductsByCategory(route.params.id)

</script>

<style scoped>

</style>