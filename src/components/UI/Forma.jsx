import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../../context/Context";
const Forma = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputValueDate, setInputValueDate] = useState("");
	const { handlerValue } = useContext(MyContext);

	const undlerSubmitValue = (e) => {
		e.preventDefault();

		const newValue = {
			id: Date.now().toString(),
			title: inputValue,
			date: inputValueDate,
			isCompleted: false,
		};

		handlerValue(newValue);
		setInputValueDate("");
		setInputValue("");
	};

	return (
		<Container>
			<form className="form" onSubmit={undlerSubmitValue}>
				<Card>
					<Input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						type="text"
					/>
				</Card>
				<Card>
					<Input
						value={inputValueDate}
						onChange={(e) => setInputValueDate(e.target.value)}
						type="date"
					/>
				</Card>
				<Card>
					<Button>Added</Button>
				</Card>
			</form>
		</Container>
	);
};

export default Forma;

const Container = styled.div`
	width: 700px;
	height: 100px;
	display: flex;
	align-items: center;
	.form {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const Card = styled.div`
	margin: 5px;
`;
const Input = styled.input`
	width: 300px;
	padding: 7px 10px;
	outline: none;
	border: none;
	border-bottom: 2px solid black;
	background-color: white;
	color: black;
`;
const Button = styled.button`
	padding: 7px 10px;
	border: none;
	background-color: green;
	color: white;
	cursor: pointer;
`;
