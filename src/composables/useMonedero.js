import {reactive, toRefs} from "vue";

export default function () {

    const data = reactive({
        alcancia: [],
        moneda: null,
        monedaAconsultar: null,
        permitidas: ["50", "100", "200", "500", "1000"],
        mensaje: "Agregue una moneda a la alcancia",
        mensaje2: "",
        isAllowed: true,
        total:null,
        unidades: null
    })

    const agregarMoneda = () => {


        if (typeof data.moneda != 'string') {
            data.mensaje = "Ingrese una denominacion permitida"
            data.isAllowed = false;
            return
        }

        if (!data.permitidas.includes(data.moneda)) {
            data.mensaje = "Ingrese una denominacion permitida"
            data.isAllowed = false;
            return
        }

        data.alcancia.push(data.moneda)
        data.mensaje = "Dinero ingresado satisfactoriamente"


        data.moneda = null
        data.mensaje = "Agregue una moneda a la alcancia"
    }

    const consultar = () => {
        data.mensaje2 = ""
        if (typeof data.monedaAconsultar != 'string') {
            data.mensaje2 = "Ingrese una denominacion permitida"

            data.total = null
            data.unidades = null
            return
        }
        if (!data.permitidas.includes(data.monedaAconsultar)) {
            data.mensaje2 = "Ingrese una denominacion permitida"

            data.total = null
            data.unidades = null
            return
        }
        let reduce = (a, b) => parseInt(a) + parseInt(b)
        let filtreded = data.alcancia.filter(el => el == data.monedaAconsultar)

        let total = filtreded.reduce(reduce)
        let unidades = filtreded.length

        data.total = total
        data.unidades = unidades
        data.mensaje2 = ""
    }


    return {...toRefs(data), agregarMoneda, consultar}

}