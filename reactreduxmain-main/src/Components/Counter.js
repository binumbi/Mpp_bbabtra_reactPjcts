    // counter.js
    import React from 'react';
    import { useDispatch,  } from 'react-redux';
    import { increment,decrement } from '../Action/action';
    import { useNavigate } from 'react-router-dom';
    const Counter = () => {
        const Navigate = useNavigate();
        const dispatch = useDispatch();
        const handleshoe =() => {
            Navigate('/show')
        }
    return (
        <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={handleshoe}>show</button>
        </div>
    );
    };

    export default Counter;
