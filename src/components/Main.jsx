import { useContext } from "react";
import List from "./List";
import ModalEdit from "./ModalEdit";
import Forma from "./UI/Forma";
import styled from "styled-components";
import { MyContext } from "../context/Context";
const Main = () => {
	const { editData } = useContext(MyContext);
	return (
		<Container>
			<Forma />
			<List />
			{editData && <ModalEdit />}
		</Container>
	);
};

export default Main;
const Container = styled.div`
	width: 700px;
	min-height: 200px;
	border: 1px solid black;
	margin: 20px auto;
	border-radius: 10px;
`;
