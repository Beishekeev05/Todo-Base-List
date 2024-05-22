import React from "react";
import Main from "./components/Main";
import { ContextProvider } from "./context/Context";

function App() {
	return (
		<ContextProvider>
			<Main />
		</ContextProvider>
	);
}

export default App;
