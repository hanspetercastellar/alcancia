<template>
 <div class="flex mb-5">
   <div class="flex flex-col w-80 mx-auto">
     <h2>{{ mensaje }}</h2> {{ totalMonedas }}<br>

     <input placeholder="Agregar valor" type="text" id="moneda"
            class="form-input placeholder-indigo-500 transform duration-150 placeholder-opacity-50  ease-in-out rounded text-pink-500"
            v-model="moneda" @keypress.enter="agregarMoneda"/>

   </div>
   <div class="flex flex-col w-80 mx-auto">
     <h2 class="total">{{ current }}</h2>
   </div>
   <div class="flex flex-col w-80 mx-auto">

   </div>
   <Allowed :total="current"/>
 </div>


  <div id="" class="shadow-lg p-3 container mx-auto bg-yellow-200 rounded-lg mt-3 ">

    <ul class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4  md:grid-flow-col">
      <Moneda :alcancia="alcancia"/>
    </ul>

  </div>


</template>
<style scoped>
ul {
  position: relative;
  width: 100%;
  list-style: none;
}

.total {
  font-stretch: unset;
  color: #42b983;
  font-weight: 600;
  font-size: 50px;
}
</style>
<script>
import {ref} from "vue";
import useMonedero from '@/composables/useMonedero'
import Moneda from "../components/Moneda";
import Allowed from "../components/Allowed";
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    Moneda,
    Allowed,
  },
  computed: {
    totalMonedas() {
      return this.alcancia.length
    },
    current() {
      const reduce = (ac, curr) => parseInt(ac) + parseInt(curr)
      let res = this.alcancia.length > 0 ? this.alcancia.reduce(reduce) : ''
      return "$ " + res
    },
    monedasXdenominacion(denominacion) {
      let filter = this.alcancia.filter((moneda) => moneda == denominacion);
      return filter.length
    },

  },
  setup() {
    const {alcancia, permitidas, mensaje, isAllowed, agregarMoneda, moneda} = useMonedero()
    return {alcancia, permitidas, mensaje, isAllowed, agregarMoneda, moneda}
  }
}
</script>
