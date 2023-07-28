<template>
  <div>
    <div class="flex justify-start items-center gap-4 px-5 py-3 flex-wrap bg-slate-100">
      <select v-model="selectedSort" class="outline-none rounded-lg bg-white p-2" @change="sortProducts()">
        <option value="">Trier</option>
        <option value="price">Prix croissant</option>
        <option value="-price">Prix décroissant</option>
      </select>
      <div class="flex items-center gap-2">
        <input type="radio" id="star" name="filter" v-model="selectedFilter" value="rating" @change="sortProducts()">
        <label for="star" class="leading-none">Meilleure note</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="radio" id="notice" name="filter" v-model="selectedFilter" value="" @change="sortProducts()">
        <label for="notice" class="leading-none">Nombre d'avis</label>
      </div>
      <p @click="reset = true">réinitialiser</p>
    </div>

    <ProductContainer>
      <ProductCard v-for="product in sortedProducts" :title="product.title" :price="product.price"
                   :image="product.image" :rating="product.rating" :id="product.id"/>
    </ProductContainer>
  </div>
</template>

<script setup>
import {dynamicSort} from "../../composables/carte";
import {useRoute} from "nuxt/app";

const {$api} = useNuxtApp();
const route = useRoute();

const {data: products} = await $api.getAllProductsByCategory(route.params.id);
const sortedProducts = ref([]);
const selectedSort = ref("");
const selectedFilter = ref("");

function sortProducts() {
  console.log("allo"+selectedFilter.value)
  if (selectedSort.value !== null || selectedSort.value !== "") sortedProducts.value.sort(dynamicSort(selectedSort.value));
  if (selectedFilter.value !== null || selectedFilter.value !== "") sortedProducts.value.sort(dynamicSort(selectedFilter.value));
}

onMounted(() => {
  sortedProducts.value = products;
  console.log(products)
});

</script>

<style scoped>

</style>