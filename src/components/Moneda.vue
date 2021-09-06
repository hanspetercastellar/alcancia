<!-- Renderiza la lista de monedas en la alcancia-->
<template>
  <li v-for="(moneda, index) in alcancia" :key="index"
      class="transition shadow-lg duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
    {{ moneda }}
  </li>
</template>

<style>
li {
  background-image: url("../assets/moneda.png");
  /* background-size: 50px; */
  height: 80px;
  display: flex;
  justify-content: center;
  width: 102px;
  border-radius: 40px;
  background-repeat: no-repeat;
  align-items: center;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>

<script>
export default {
  props:{
    alcancia: Array,
    default: []
  }
}
</script>