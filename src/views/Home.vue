<template>
 <div class="flex mb-5 container items-center	  mx-auto ">
   <div class="flex flex-col rounded-lg  bg-purple-300 p-3 bg-opacity-50 h-60">
     <label for="moneda">{{ mensaje }}</label>
     <input placeholder="Agregar moneda" type="text" id="moneda"
            class="form-input placeholder-indigo-500 transform duration-150 placeholder-opacity-50  ease-in-out rounded text-pink-500"
            v-model="moneda" @keypress.enter="agregarMoneda"/>
     <h2 class="total">{{ current }}</h2>
     <div>
       <span>Unidades: {{totalMonedas}}</span>
     </div>
   </div>
   <div class="flex flex-col w-80 mx-auto  rounded-lg   bg-purple-300 p-3 bg-opacity-50 h-60">
     <label for="moneda">Consultar</label>
      <input type="text" v-model="monedaAconsultar" @keypress.enter="consultar" placeholder="Ingrese un valor permitido" class="form-input placeholder-indigo-500 transform duration-150 placeholder-opacity-50  ease-in-out rounded text-pink-500">
     <div>
       <span>{{mensaje2}}</span>
     </div>
     <div>
       <table class="">
         <tr>
           <th>Unidades</th>
           <th>Total</th>
         </tr>
         <tbody>
         <tr>
           <td> {{unidades}}</td>
           <td>$ {{total}}</td>
         </tr>
         </tbody>

       </table>

     </div>
   </div>
   <Allowed :total="current"/>
 </div>

  <h1 class="prose-2xl">Alcancía</h1>
  <div id="" class="shadow-lg p-3 container mx-auto bg-yellow-200 rounded-lg mt-3 bg-opacity-50">

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
    const {alcancia, permitidas, mensaje,mensaje2,monedaAconsultar, isAllowed, agregarMoneda,consultar, moneda,total,unidades
    } = useMonedero()
    return {alcancia, permitidas, mensaje,mensaje2, isAllowed,monedaAconsultar, agregarMoneda,consultar, moneda,total,unidades}
  }
}
</script>
