import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MyContext } from "../context/Context";
const ModalEdit = () => {
	const { editData, editHandler } = useContext(MyContext);
  
	const [modalInput, setModalInput] = useState("");
	const [modalInputdate, setModalInputDate] = useState("");

	console.log(editData.id);

	useEffect(() => {
		if (editData) {
			setModalInput(editData.title);
			setModalInputDate(editData.date);
		}
	}, [editData]);

	const handleSave = (e) => {
		e.preventDefault();
		if (editData) {
			editHandler(modalInput, modalInputdate, editData.id);
		}
	};

	return (
		<Block>
			<form onSubmit={handleSave}>
				<input
					onChange={(e) => setModalInput(e.target.value)}
					value={modalInput}
					type="text"
				/>
				<input
					value={modalInputdate}
					onChange={(e) => setModalInputDate(e.target.value)}
					type="date"
				/>
				<button>save</button>
			</form>
		</Block>
	);
};

export default ModalEdit;
const Block = styled.div`
	width: 350px;
	padding-top: 30px;
	height: 300px;
	border: 1px solid wheat;
	background-color: bisque;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	input {
		width: 60%;
		height: 30px;
	}
	button {
		padding: 4px 10px;
	}
`;
