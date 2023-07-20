<template>
  <div class="bg-slate-100 p-3 rounded-lg flex justify-center items-center flex-col w-80">
    <img class="w-48 h-48 object-contain object-center" :src="image">
    <p>{{ title }} </p>
    <p>{{ price }} €</p>
    <div class="flex justify-between w-full">
      <p>note : {{rating.rate}} </p>
      <p>avis : {{rating.count}}</p>
    </div>
  </div>
</template>

<script setup>
const {$api} = useNuxtApp()
const props = defineProps({
  title: String,
  price : Number,
  image : String,
  rating : Object
})
</script>

<style scoped>

</style>