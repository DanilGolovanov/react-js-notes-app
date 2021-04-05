import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setItem, getItem, removeItem, setSessionItem, getSessionItem, removeSessionItem,} from '../../services/storage.js';
import { Link } from 'react-router-dom';
import '../addNote/note.css';

function EditNote(props) {

    let { id } = useParams();
    
    useEffect(() => {
		let storedNotes = getItem('notes', []);
        let currentNote = storedNotes[id];
        setSessionItem('currentTitle', currentNote[0]);
        setSessionItem('currentContent', currentNote[1]);
        setTitle(currentNote[0]);
        setNote(currentNote[1]);
    }, []);

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');


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
            storedNotes[id] = array_note;
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
        <header className="note">
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
                    <label htmlFor="note-body">Note</label>
                    <textarea className="form-control"
                        id="note-body"
                        rows="12"
                        value={getSessionItem('currentContent', '')}
                        onChange={onChangeNote}></textarea>
                </div>
            </form>
 
            <Link to="/" className="btn btn-success save"
            onClick={saveNote}>Save Changes</Link>
        </header>
    );
}

export default EditNote;
