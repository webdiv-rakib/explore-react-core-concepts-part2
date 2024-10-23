import { useState } from "react"

export default function ProductCounter() {
    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        const newAdd = count + 1;
        setCount(newAdd)
    }
    const handleRemoveFromCard = () => {
        const newRemove = count - 1;
        setCount(newRemove);
    }
    return (
        <div style={{ border: '2px solid tomato', padding: '20px', margin: '15px', borderRadius: '20px' }}>
            <h2>Product Quantity: {count}</h2>
            <div style={{display:'flex', gap: '10px' }}>
                <button onClick={handleAddToCart}>Add To Card</button>
                <button onClick={handleRemoveFromCard}>Remove From Card</button>
            </div>
        </div>
    )
}