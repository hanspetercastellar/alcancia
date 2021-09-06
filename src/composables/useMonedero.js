import { reactive, toRefs } from "vue";

export default function(){

    const data = reactive({
        alcancia:[],
        moneda:null,
        permitidas:["50","100","200","500","1000"],
        mensaje: "Agregue una moneda a la alcancia",
        isAllowed:true
    })

    const agregarMoneda = () => {
      
            
            if(typeof data.moneda != 'string'){
                data.mensaje = "Ingrese una denominacion permitida"
                data.isAllowed = false;
                return
            }
    
            if(!data.permitidas.includes(data.moneda)){
                data.mensaje = "Ingrese una denominacion permitida"
                data.isAllowed = false;
                return
            }

            data.alcancia.push(data.moneda)
            data.mensaje = "Dinero ingresado satisfactoriamente"

    

           data.moneda = null
           data.mensaje = "Agregue una moneda a la alcancia"
    }



    return { ...toRefs(data), agregarMoneda }

}