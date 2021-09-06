
<template>
  <section class="flex container ml-9 justify-between w-80	rounded-lg ">

    <div class="flex flex-col border">
      <h1 class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-left text-yellow-500">Monedas permitidas</h1>
      <div class="flex">
        <div class="allow"  v-for="(allo, index) in permitidas" :key="index">{{allo}}</div>
      </div>
    </div>

  </section>
</template>
<style>
.allow{
  background-image: url("../assets/moneda.png");
  /* background-size: 50px; */
  height: 50px;
  display: flex;
  justify-content: center;
  width: 50px;
  border-radius: 40px;
  background-repeat: no-repeat;
  align-items: center;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
<script>
import useMonedero from "../composables/useMonedero";

export default {
  setup() {
    const {permitidas} = useMonedero()
    return {permitidas}
  }

}
</script>