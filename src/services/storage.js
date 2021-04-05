// LOCAL STORAGE
export function getItem(key, defaultValue) {
    let item = localStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}

export function setItem(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

export function removeItem(key) {
    localStorage.removeItem(key);
}

// SESSION STORAGE
export function getSessionItem(key, defaultValue) {
    let item = sessionStorage.getItem(key);
    if (item) {
        item = JSON.parse(item);
        return item;
    }
    return defaultValue;
}

export function setSessionItem(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

export function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}


//DRAFT
//const [notes, setNotes] = useState([]);

//function addNote(note) {
//	let new_array = Array.from(notes);
//	new_array.push(note);
//	setNotes(new_array);
//}

//function deleteNote(index) {
//	let new_array = Array.from(names);
//	new_array.splice(index, 1);
//	setNames(new_array);
//}