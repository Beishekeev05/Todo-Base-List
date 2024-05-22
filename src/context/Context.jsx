import React, { createContext, useState } from "react";
const MyContext = createContext();
const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [editData, setEditData] = useState(null);

	const handlerValue = (param) => {
		setData((prev) => [...prev, param]);
	};

	const deleteHandler = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const completeHandler = (id) => {
		setData((prev) =>
			prev.map((item) => {
				return item.id === id
					? { ...item, isCompleted: !item.isCompleted }
					: item;
			})
		);
	};

	const editToggleHandler = (id) => {
		setEditData(data.find((item) => item.id === id));
	};

	const editHandler = (dats, datsDate, datsId) => {
		console.log(dats, "id");
		const updatedDats = data.map((item) => {
			if (item.id === datsId) {
				return {
					...item,
					title: dats,
					date: datsDate,
				};
			}
			return item;
		});
		setData(updatedDats);

		setEditData(null);
	};

	console.log(data);

	return (
		<MyContext.Provider
			value={{
				handlerValue,
				data,
				deleteHandler,
				completeHandler,
				editToggleHandler,
				editData,
				editHandler,
			}}>
			{children}
		</MyContext.Provider>
	);
};

export { ContextProvider, MyContext };
