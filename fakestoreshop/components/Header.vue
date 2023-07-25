<template>
  <div class="p-3 bg-slate-200 flex justify-between items-center">
    <h1>
      <NuxtLink to="/">FakeStoreShop</NuxtLink>
    </h1>
    <NuxtLink class="relative" to="/cart">
      <Icon class="text-xl mr-2" name="ic:twotone-shopping-cart" color="black"/>
      <span
          v-if="cartStore.length > 0"
          class="text-white flex justify-center items-center block text-center text-xs absolute rounded-full top-0 right-0 bg-red-600 w-4 h-4 leading-none">
        {{ cartStore.length }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
import {useCart} from "../composables/carte";

const cartStore = useCart();

onMounted(() => {
  try {
    cartStore.value = JSON.parse(localStorage.getItem("cart"));
    console.log(cartStore);
  } catch (e) {
    console.log(e);
  }
});


</script>

<style scoped>


</style>