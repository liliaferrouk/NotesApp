import React from 'react'

function ListItem(props) {
  return (
    <div>
        <h3>{props.note.body}</h3>
    </div>
  )
}

export default ListItem