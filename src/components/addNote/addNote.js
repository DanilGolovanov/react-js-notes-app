import React, { useState } from 'react';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem,} from '../../services/storage.js';
import { Link } from 'react-router-dom';
import './note.css';

function AddNote(props) {
    const [title, setTitle] = useState(getSessionItem('currentTitle', ''));
    const [note, setNote] = useState(getSessionItem('currentContent', ''));

    function onChangeTitle(event) {
        setTitle(event.target.value);
        setSessionItem('currentTitle', event.target.value)
    }

    function onChangeNote(event) {
        setNote(event.target.value);
        setSessionItem('currentContent', event.target.value)
    }

    function saveNote() {
        let noteTitle = title.trim();
        if (noteTitle) {
            let array_note = [noteTitle, note];
            let storedNotes = getItem('notes', []);
            storedNotes.push(array_note);
            setItem('notes', storedNotes);
            props.setNotes(storedNotes);

            //remove items from session storage when saving note
            removeSessionItem('currentContent');
            removeSessionItem('currentTitle');
        } else {
            alert('Please provide a title');
        }
    }

    return (
        <div className="note">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title..."
                        value={getSessionItem('currentTitle', '')}
                        onChange={onChangeTitle}/>
                </div>

                <div className="form-group">
                    <label htmlFor="note-body">Content</label>
                    <textarea className="form-control"
                        id="note-body"
                        rows="12"
                        value={getSessionItem('currentContent', '')}
                        onChange={onChangeNote}></textarea>
                </div>
            </form>
 
            <Link to="/" className="btn btn-success save"
            onClick={saveNote}>Save Note</Link>
            
        </div>
    );
}

export default AddNote;

