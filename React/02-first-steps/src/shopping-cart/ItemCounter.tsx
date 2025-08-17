import { useState, type CSSProperties } from "react";
// import './ItemCounter.css'
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
    name: string,
    // quantity: number | undefined,   // quantity debe ser obligatorio pero puedo mandarle undefined.
    quantity?: number,
};

// const sectionStyles: CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginTop: 10,
// };

const ItemCounter = (props: ItemCounterProps) => {
    const { name, quantity = 0 } = props;

    const [count, setCount] = useState(quantity);

    const handleAdd = () => setCount((count) => count + 1);
    const handleSubstract = () => {
        if (count > 0) {
            setCount((count) => count - 1);
        }

    };

    const sectionSpanStyles: CSSProperties = {
        color: count === 0 ? 'red' : 'black',
    };

    return (
        // <section style={sectionStyles}>
        // <section className="item-row">
        <section className={styles['item-row']}>
            {/* <span className="item-text" style={sectionSpanStyles}> */}
            <span className={styles['item-text']} style={sectionSpanStyles}>
                {name}
            </span>
            <button onClick={handleSubstract}>-1</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+1</button>
        </section >
    )
};

export default ItemCounter;
