import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNote from './addNote/addNote.js';
import Main from './main/main.js';
import EditNote from './editNote/editNote.js';

function Routes(props) {
    
    return (
        <Switch>
            <Route path="/" exact><Main notes={props.notes} setNotes={props.setNotes}/></Route>
            <Route path="/addnote"><AddNote setNotes={props.setNotes}/></Route>
            <Route path="/editnote/:id"><EditNote setNotes={props.setNotes}/></Route>
        </Switch>
    );
}

export default Routes;
