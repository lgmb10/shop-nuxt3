<template>
  <div>
    <Header></Header>
    <slot/>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "DefaultLayout",
  components: {Header}
}
</script>

<style scoped>

</style>