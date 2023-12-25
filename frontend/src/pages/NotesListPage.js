import React from 'react'
import ListItem from '../components/ListItem'

function NotesListPage() {
    const [notes, setNotes] = React.useState([])

    React.useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/notes/")
             .then(res => res.json())
             .then(data => setNotes(data) )
    },[])
  return (
    <div>
        <div className='notes-list'>
            {notes.map((note,index)=>(
                <ListItem key={index} note={note} />
            ))}
        </div>
    </div>
  )
}

export default NotesListPage