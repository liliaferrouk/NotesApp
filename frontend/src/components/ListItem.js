import React from 'react'
import {Link} from 'react-router-dom';

function ListItem(props) {

  function getTime(date){
    return new Date(date).toLocaleDateString()
  }

  function getTitle(note){
    let title = note.body.split('\n')[0]
    if(title.length > 45){
      return title.slice(0,45)
    }
    return title
  }

  function getContent(note){
    let title = getTitle(note)
    let content = note.body.replaceAll('\n',' ')
    content = content.replaceAll(title,'')
    if(content.length > 45){
      return content.slice(0,45) + '...'
    }
    return content
  }
  return (
      <Link to={`/note/${props.note.id}`}>
        <div className='notes-list-item'>
        <h3>{getTitle(props.note)}</h3>
        <p><span>{getTime(props.note.updated)}</span>{getContent(props.note)}</p>
        </div>
      </Link>
  )
}

export default ListItem