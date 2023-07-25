<template>
  <div class="m-4">
    <h1 class="pb-4 font-medium text-2xl">Panier</h1>
    <div class="flex flex-col gap-2">
      <CartItem v-for="product in cartStore" :id="product.id" :quantity="product.quantity" />
    </div>

  </div>
</template>

<script setup>
import {useCart} from "../composables/carte";

const cartStore = useCart();


</script>

<style scoped>

</style>