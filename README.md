<details>
<summary>Setup & Pattern</summary>

```js
//  npm i @reduxjs/toolkit react-redux
```

store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
```

features/counter/counterSlice

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		reset: (state) => {
			state.count = 0;
		},
		increaseByAmount: (state, action) => {
			state.count += +action.payload;
		},
	},
});

export const { increment, decrement, reset, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

Counter.jsx

```js
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
```

</details>
