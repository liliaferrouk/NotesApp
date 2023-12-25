import React from 'react'
import {Link} from 'react-router-dom';

function ListItem(props) {
  return (
      <Link to={`/note/${props.note.id}`} style={{textDecoration: "none"}}>
        <h3>{props.note.body}</h3>
      </Link>
  )
}

export default ListItem