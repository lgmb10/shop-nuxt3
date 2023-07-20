<template>
  <div>
    <ProductContainer>
      <ProductCard v-for="product in menProducts" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" />
    </ProductContainer>
  </div>
</template>

<script setup>
import ProductContainer from "../components/ProductContainer";

const {$api} = useNuxtApp()

const {data: menProducts} = await $api.getMenProducts();

</script>

<style scoped>

</style>