<template>
  <div class="p-3 bg-slate-300 flex justify-between items-center">
    <h1>
      <NuxtLink to="/">FakeStoreShop</NuxtLink>
    </h1>
    <div class="flex items-center">
      <NuxtLink class="inline-block bg-white rounded-lg p-2 text-center mx-5 cursor-pointer">
        Back Office
      </NuxtLink>
      <NuxtLink class="relative" to="/cart">
        <Icon class="text-xl mr-2" name="ic:twotone-shopping-cart" color="black"/>
        <span
            v-if="cartStoreQuantity !== null && cartStoreQuantity > 0"
            class="text-white flex justify-center items-center block text-center text-xs absolute rounded-full top-0 right-0 bg-red-600 w-4 h-4 leading-none">
        {{ cartStoreQuantity }}
      </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import {countCartQuantity, useCart, useCartQuantity} from "../composables/carte";

const cartStore = useCart();
const cartStoreQuantity = useCartQuantity();

onMounted(() => {
  try {
    cartStore.value = JSON.parse(localStorage.getItem("cart"));
    countCartQuantity(cartStore, cartStoreQuantity);
  } catch (e) {
    console.log(e);
  }
});


</script>

<style scoped>


</style>