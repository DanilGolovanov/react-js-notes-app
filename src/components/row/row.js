import React from 'react';
import './row.css';
import { Link } from 'react-router-dom';

function Row(props) {

    return (
        <div className="row">
            <Link to={"/editnote/" + props.index}>
                <span>#{props.index + 1}</span> {props.title}
            </Link>
            <button className="btn btn-danger row-delete" onClick={props.onRowDelete}>X</button>
        </div>      
    );
}

export default Row;
