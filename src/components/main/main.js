import React, { useState, useEffect } from 'react';
import Row from '../row/row.js';
import './main.css';
import { setItem, getItem, removeItem } from '../../services/storage.js';
import { Link } from 'react-router-dom';

function Main(props) {
	
	let new_array = Array.from(props.notes);

	function deleteNote(index) {
		new_array.splice(index, 1);
		props.setNotes(new_array);	
	}

	function renderData() {
	
		let items = [];		
		for(let i = 0; i < props.notes.length; i++) {
			function onRowDelete() {
				deleteNote(i);
			}		
			items.push(
				<Row
					index={i}
					key={i}
					title={props.notes[i][0]}
					content={props.notes[i][1]}
					onRowDelete={onRowDelete}
				/>
			);			
		}

		console.log()
		setItem('notes', props.notes)

		return items;
	}

    return (
        <div className="main">
			<div className="board">
				<div className="list">
					{renderData()}
				</div>	
				<Link to="/addnote" className="btn btn-success">+ Add Note</Link>
			</div>
        </div>
    );
}

export default Main;
