import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header.js';
import { setItem, getItem } from './services/storage.js';
import Routes from './components/routes.js';

function App() {

	//array which contains multiple array representing notes [title, content]
	const [notes, setNotes] = useState(getItem('notes', []));
	
	// useEffect(() => {
	// 	let storedNotes = getItem('notes', []);
	// 	setNotes(storedNotes);
	// }, []);

	return (
		<div className="App">
			<Header setNotes={setNotes}/>
			<Routes notes={notes} setNotes={setNotes}/>
		</div>
	);
}

export default App;
