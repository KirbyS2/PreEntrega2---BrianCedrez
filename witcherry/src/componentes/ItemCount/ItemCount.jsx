import React, { useState } from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
    <div>
        <div>
            <button onClick={decrement}>-</button>
            <h3>{quantity}</h3>
            <button onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
            </button>
        </div>
    </div>
    )
}
