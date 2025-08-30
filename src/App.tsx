import Footer from "@components/Footer";
import Header from "@components/Header";
import Main from "@components/Main";
import { Paper } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { styles } from "./constants/styles";

function App() {
	const [value, setValue] = useState("home");

	return (
		<Paper sx={styles.mainContainer}>
			<Header value={value} setValue={setValue} />
			<Main />
			<Footer setValue={setValue} />
		</Paper>
	);
}

export default App;
