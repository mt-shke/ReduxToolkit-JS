import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, setNameToRobert, resetName } from "./nameSwitcherSlice.js";

const NameSwitcher = (props) => {
	const { name } = useSelector((state) => state.name);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	return (
		<div>
			<span>The name is: {name}</span>
			<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<button onClick={() => dispatch(setName(inputValue))}>setName</button>
			<button onClick={() => dispatch(setNameToRobert())}>setName</button>
			<button onClick={() => dispatch(resetName())}>setName</button>
		</div>
	);
};
export default NameSwitcher;
