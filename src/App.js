import React from 'react';
import './App.css';
import SingleSentMessageContainer from './Pages/Components/SingleSentMessageContainer';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import DataSet from "./DataSet.json";

function App() {
	console.log(DataSet)
	return (
		<div className="App">
			{/* <SingleSentMessageContainer content={"hello world here to pass the content"} /> */}
			<HomePage />
			{/* <LoginPage /> */}
		</div>
	);
}

export default App;
