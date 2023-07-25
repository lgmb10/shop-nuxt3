<template>
  <div class="flex flex-col justify-center items-center">
    <ProductContainer>
      <ProductCard v-for="product in menProducts" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" :id="product.id" />
    </ProductContainer>
    <NuxtLink to="/categoryProducts/men's%20clothing">More</NuxtLink>
    <ProductContainer>
      <ProductCard v-for="product in womenProducts" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" :id="product.id" />
    </ProductContainer>
    <NuxtLink to="/categoryProducts/women's%20clothing">More</NuxtLink>
  </div>
</template>

<script setup>
import ProductContainer from "../components/ProductContainer";

const {$api} = useNuxtApp()

const {data: menProducts} = await $api.getMenProducts(4);
const {data: womenProducts} = await $api.getWomenProducts(4);

</script>

<style scoped>

</style>