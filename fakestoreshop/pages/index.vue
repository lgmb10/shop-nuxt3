<template>
  <div class="flex flex-col justify-center items-center pb-10">
    <ProductContainer>
      <ProductCard v-for="product in menProducts" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" :id="product.id" />
    </ProductContainer>
    <NuxtLink class="bg-slate-300 rounded-lg px-3 py-2" to="/categoryProducts/men's%20clothing">Afficher plus de produits</NuxtLink>
    <ProductContainer>
      <ProductCard v-for="product in womenProducts" :title="product.title" :price="product.price" :image="product.image" :rating="product.rating" :id="product.id" />
    </ProductContainer>
    <NuxtLink class="bg-slate-300 rounded-lg px-3 py-2" to="/categoryProducts/women's%20clothing">Afficher plus de produits</NuxtLink>
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