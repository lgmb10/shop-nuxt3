<template>
  <div class="m-4">
    <h1 class="pb-4 font-medium text-2xl">Panier</h1>
    <div class="flex flex-col gap-2" v-if="listProduct.length > 0">
      <CartItem
          v-for="product in cartStore" :key="product"
          :product="listProduct[listProduct.findIndex(x => x.id === product.id)]"
          :quantity="product.quantity"
      />
      <p class="text-end">Prix Total : {{ calculatedFinalPrice(cartStore, listProduct) }}€</p>

    </div>
    <p v-if="!cartStore.length">Aucun article dans le panier</p>
  </div>
</template>

<script setup>
import {useCart, calculatedFinalPrice} from "../composables/carte";

const {$api} = useNuxtApp();
const cartStore = useCart();
const listProduct = ref([]);

onMounted(async () => {
  const promises = []
  cartStore.value.forEach((x) => {
    promises.push($api.getOneProduct(x.id))
  })
  const response = await Promise.all(promises)
  listProduct.value = response.map(x => x.data)
})
</script>

<style scoped>

</style>