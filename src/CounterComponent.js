import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
    const [count, setCount] = useCounter();

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default CounterComponent;