import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = React.useState(null)

    React.useEffect(()=>{
      if (id === 'new') return
        fetch(`/api/notes/${id}/`)
             .then(res => res.json())
             .then(data => setNote(data) )
    },[id])

    function updateNote(){
      fetch(`/api/notes/${id}/`,{
        method: "PUT",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }
    function hundelSubmit(){
      if(id === 'new'){
        if(note.body) createNote()
      }else{
        if(!note.body){
          deleteNote()
        }else{
          updateNote()
        }
      }
    }

    function deleteNote(){
      fetch(`/api/notes/${id}/`,{
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json'
        }
      })
    }

    function createNote(){
      fetch(`/api/notes/`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <Arrowleft onClick={hundelSubmit}/>
          </Link>
          { id !=='new' ? (
            <Link to="/">
            <button onClick={deleteNote} style={{ marginLeft: '500%', }}>DELETE</button>
            </Link>)   : (
            <Link to="/">
            <button onClick={hundelSubmit} style={{ marginLeft: '500%', }}>Done</button>
            </Link>
            )
          }
        </h3>
      </div>
    <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage