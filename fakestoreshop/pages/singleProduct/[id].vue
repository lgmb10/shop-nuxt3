<template>
  <div>
    chien chaud
    <img class="w-48 h-48 object-contain object-center" :src="product.image">
    <p>{{ product.title }} </p>
    <p>{{ product.price }} €</p>
    <div class="flex justify-between w-full">
      <p>note : {{product.rating.rate}} </p>
      <p>avis : {{product.rating.count}}</p>
    </div>
    <p>{{product.description}}</p>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt/app";

const {$api} = useNuxtApp();
const route = useRoute();

const {data: product} = await $api.getOneProduct(route.params.id);

console.log(product)


</script>

<style scoped>

</style>