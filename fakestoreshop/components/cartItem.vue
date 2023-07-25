<template>
  <div class="bg-slate-100 rounded-lg flex items-center p-3">
    <img class="w-10 h-10 object-contain object-center" :src="product.image">
    <p class="pl-4">{{product.title}}</p>
    <div class="grow flex justify-end items-center gap-4">
      <p class="text-end">quantité : {{quantity}}</p>
      <Icon class="text-xl mr-2 cursor-pointer" name="ic:baseline-delete-forever" color="black"/>
    </div>
  </div>
</template>

<script setup>
const {$api} = useNuxtApp()
const props = defineProps({
  id: Number,
  quantity: Number,
});

const {data: product} = await $api.getOneProduct(props.id);

</script>

<style scoped>

</style>