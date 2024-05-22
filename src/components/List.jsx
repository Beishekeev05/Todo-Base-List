import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import styled from "styled-components";
const List = () => {
	const { data, deleteHandler, completeHandler, editToggleHandler } =
		useContext(MyContext);
	console.log(data);
	return (
		<Container>
			{data.length > 0 &&
				data.map((item) => {
					return (
						<div className="blochka" key={item.id}>
							<p
								style={{
									textDecoration: item.isCompleted ? "line-through" : "",
								}}>
								{item.title}
							</p>
							<p
								style={{
									textDecoration: item.isCompleted ? "line-through" : "",
								}}>
								{item.date}{" "}
							</p>
							<Button onClick={() => deleteHandler(item.id)}>Delete</Button>
							<Buttonc onClick={() => completeHandler(item.id)}>
								{item.isCompleted ? "UnCompleted" : "Completed"}
							</Buttonc>
							<Buttons onClick={() => editToggleHandler(item.id)}>
								Edite
							</Buttons>
						</div>
					);
				})}
		</Container>
	);
};

export default List;
const Container = styled.div`
	width: 95%;
	min-height: 100px;
	border: 1px solid black;
	margin: 10px auto;
	display: flex;
	flex-direction: column;
	padding: 5px;
	gap: 10px;
	align-items: center;
	.blochka {
		width: 95%;
		height: 30px;
		border: 1px solid black;
		display: flex;
		gap: 20px;
		position: relative;
		align-items: center;
	}
`;
const Button = styled.button`
	padding: 5px 10px;
	position: absolute;
	top: 1px;
	right: 5px;
	cursor: pointer;
	border: none;
`;
const Buttons = styled.button`
	padding: 5px 10px;
	position: absolute;
	top: 1px;
	right: 72px;
	cursor: pointer;
	border: none;
`;
const Buttonc = styled.button`
	padding: 5px 10px;
	position: absolute;
	top: 1px;
	right: 130px;
	cursor: pointer;
	border: none;
`;
