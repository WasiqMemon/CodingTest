import React from "react";
import "./App.css";
import Users from "./pages/users";

function App() {
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: "white",
				height: "100%",
				width: "100%",
			}}
		>
			<div>
				<Users />
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
