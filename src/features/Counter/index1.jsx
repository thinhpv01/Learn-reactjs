import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice1';

CounterFeature1.propTypes = {};

function CounterFeature1(props) {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const handleIncreaseClick = () => {
        dispatch(increase());
    };
    const handleDecreaseClick = () => {
        dispatch(decrease());
    };
    return (
        <div>
            {count}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature1;
