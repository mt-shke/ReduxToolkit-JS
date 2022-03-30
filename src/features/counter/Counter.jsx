import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, increaseByAmount } from "./counterSlice";

const Counter = (props) => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState(0);

	const increaseCount = (e) => {
		dispatch(increaseByAmount(inputValue));
	};

	return (
		<section>
			<p>{count}</p>

			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
				<button onClick={() => dispatch(reset())}>reset</button>

				<input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				<button onClick={(e) => increaseCount(e)}>increase by this amount</button>
			</div>
		</section>
	);
};
export default Counter;
