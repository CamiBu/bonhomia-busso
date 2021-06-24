
import { useState } from "react";

export const ItemCount = (props) => {
    const [valor , setValor] = useState (props.initial);

function onAdd() {
    if (valor < props.stock) { 
    setValor(parseInt(valor)+1)
}
 }

function onSubstract () { 
    if (valor > 1)
    setValor(parseInt(valor)-1)

 }

 function agregarAlCarrito () {
     alert(`agregaste ${valor} productos al carrito`)
 }

return (
    <>
    <button onClick={onSubstract}> - </button>
    <input type="text" value={ valor } />
    <button onClick={onAdd}> + </button>
    <button onClick={agregarAlCarrito}> Agregar al carrito </button>
    </>
)

}
