import React from 'react'
import {Link} from 'react-router-dom';

function ListItem(props) {
  return (
      <Link to={`/note/${props.note.id}`}>
        <div className='notes-list-item'>
        <h3>{props.note.body}</h3>
        </div>
      </Link>
  )
}

export default ListItem