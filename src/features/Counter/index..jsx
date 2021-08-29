import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
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

export default CounterFeature;
