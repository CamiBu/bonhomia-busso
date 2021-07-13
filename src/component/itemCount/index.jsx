
import { useState } from "react";


export const ItemCount = (props) => {
    const [valor, setValor] = useState(props.initial);
    function onAdd() {
        if (valor < props.stock) {
            setValor(parseInt(valor) + 1)
        }
    }

    function onSubstract() {
        if (valor > 1)
            setValor(parseInt(valor) - 1)

    }
    
    function agregarCantidad() {
        props.cantidadSelect(valor)
    }

    return (
        <>
            <button onClick={onSubstract}> - </button>
            <input type="text" value={valor} />
            <button onClick={onAdd}> + </button>
            <button onClick={agregarCantidad} > Agregar al carrito </button>
        </>
    )

}